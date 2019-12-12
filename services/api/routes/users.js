const express = require('express');
const mongoose = require('mongoose');

const Users = require('../models/users');

const router = express.Router();

router.get('/', (request, response, next) => {    
    Users.find()
        .exec()
        .then((res) => {
            response.status(200).json({
                success: true,
                users: res
            });
        })
        .catch((err) => {
            response.status(500).json({
                success: false,
                error: err
            });
        });
});

router.post('/authenticate', (request, response, next) => {
    Users.find({ userName: request.body.userName, password: request.body.password }, function(err, user) {
        if(err) {
            response.status(500).json({
                success: false,
                error: err
            });
        }

        if(user.length === 1) {
            response.status(200).json({
                success: true,
                settings: user
            });
        }

        if(user.length !== 1) {
            response.status(500).json({
                success: false,
                error: 'User not found!'
            });
        }
    });
})

router.post('/', (request, response, next) => {
    const newUser = new Users({
        _id: new mongoose.Types.ObjectId(),
        userName: request.body.userName,
        password: request.body.password,
        settings: {
            floorColor: '#ff0000',
            couchColor: '#0000ff',
            wallColor: '#f5f5dc',
            curtainColor: '#008000'
        }
    });

    Users.find({ userName: request.body.userName }, function(err, user) {
        if(err) {
            response.status(500).json({
                success: false,
                error: err
            });
        }

        if(user.length !== 0) {
            response.status(500).json({
                success: false,
                error: 'User already exists!'
            });
        }

        if(user.length === 0) {
            newUser.save()
                .then((res) => {
                    response.status(200).json({
                        success: true
                    });
                })
                .catch((err) => {
                    response.status(500).json({
                        success: false,
                        error: err
                    });
                });
        }
    });

});


router.delete('/:userId', (request, response, next) => {    
    Users.findByIdAndDelete(request.params.userId)
        .exec()
        .then((res) => {
            response.status(200).json({
                success: true
            });
        })
        .catch((err) => {
            response.status(500).json({
                success: false,
                error: err
            });
        });
});

module.exports = router;
