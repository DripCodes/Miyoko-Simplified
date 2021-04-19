const mongoose = require('mongoose');

const snipeSchema = new mongoose.Schema({
    message: {
        type: String
    },
    Guild: String,

    Count: Number,

    deluser: String,

    delav: String,

    int: Number

});

const MessageModel = module.exports = mongoose.model('snipes', snipeSchema);