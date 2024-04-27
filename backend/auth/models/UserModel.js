const mongoose = require('mongoose');

const userShema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    role: {
        type: String,
        default: 'user'
    },
    password: {
        type: String,
        required: true
    },

    }
);
const User = mongoose.model('User', userShema);
module.exports = User;