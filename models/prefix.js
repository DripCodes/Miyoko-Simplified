const mongoose = require('mongoose');

const PrefixSchema = new mongoose.Schema({
    Prefix: {
        type: String
    },
    Guild: String
});

const MessageModel = module.exports = mongoose.model('prefixes', PrefixSchema);