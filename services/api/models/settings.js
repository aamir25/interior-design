const mongoose = require('mongoose');

const settingsSchema = mongoose.Schema({
    floorColor: String,
    couchColor: String,
    wallColor: String,
    curtainColor: String
});

module.exports = mongoose.model('Settings', settingsSchema);
