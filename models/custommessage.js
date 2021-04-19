const mongoose = require('mongoose');

const CustomMessage = new mongoose.Schema({
    Message: {
        type: String
    },
    User: String
});

const MessageModel = module.exports = mongoose.model('cm', CustomMessage);