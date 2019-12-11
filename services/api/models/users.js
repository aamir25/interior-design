const mongoose = require('mongoose');

const settingsSchema = require('./settings');

const usersSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    userName: String,
    password: String,
    settings: settingsSchema
});

module.exports = mongoose.model('Users', usersSchema);
