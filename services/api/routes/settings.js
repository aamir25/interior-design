const express = require('express');

const Users = require('../models/users');

const router = express.Router();

router.get('/:userId', (request, response, next) => {
    Users.findOne({ userName: request.params.userId }, function(err, user) {
        if(err) {
            response.status(500).json({
                success: false,
                error: err
            });
        }

        response.status(200).json({
            success: true,
            settings: user.settings
        });
    });
});

router.post('/:userId', (request, response, next) => {
    Users.findOne({ userName: request.params.userId }, function (err, user) {
        user.settings = request.body.settings;
    
        user.save()
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
            })
    });
});

module.exports = router;
