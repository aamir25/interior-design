const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const usersRoutes = require('./routes/users');
const settingsRoutes = require('./routes/settings');

mongoose.connect('mongodb://localhost/interior-design');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if(request.method === 'OPTIONS') {
        response.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        
        return response.status(200).json({});
    }

    next();
});

app.use('/users', usersRoutes);
app.use('/settings', settingsRoutes);

app.use((request, response, next) => {
    const error = new Error('Not Found');

    error.status = 404

    next(error);
});

app.use((error, request, response, next) => {
    response.status(error.status || 500);
    response.json({
        success: false,
        errorMsg: error.message
    });
});

module.exports = app;