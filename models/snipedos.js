const mongoose = require('mongoose');

const snipedos = new mongoose.Schema({
    int: {
        type: String
    },
    Guild: String
});

const MessageModel = module.exports = mongoose.model('snipedos', snipedos);