const mongoose = require('mongoose');

const Welcome = new mongoose.Schema({
    channel: {
        type: String
    },
    Guild: String
});

const MessageModel = module.exports = mongoose.model('wm', Welcome);