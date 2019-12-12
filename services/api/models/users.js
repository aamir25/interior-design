const mongoose = require('mongoose');

const Settings = require('./settings');

const usersSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userName: String,
    password: String,
    settings: {
        floorColor: String,
        couchColor: String,
        wallColor: String,
        curtainColor: String
    }
});

module.exports = mongoose.model('Users', usersSchema);
