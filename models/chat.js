const mongoose = require('mongoose');

const chattSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const Chat = mongoose.model('Chat', postSchema);

module.exports = Chat;
