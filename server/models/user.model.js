const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userName: {type: String, required: true},
    createdAt: {type: Date, default: Date.now}
}, {versionKey: false,});

module.exports = mongoose.model('user', UserSchema, 'user');
