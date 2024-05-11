// backend/models/user.js
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema({
    email: { 
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

const User = model('user', userSchema);
module.exports = User;
// OR shorter
// module.exports = User = mongoose.model('user', PostSchema);