/* --- backend/models/user.js --- */
// - Default -
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
    email: { 
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: false
    },
    lastName: {
        type: String,
        required: false
    },
    phoneNumber: {
        type: String,
        required: false
    },
    address: {
        type: String,
        required: false
    },
    // contacts: [ContactSchema],
    createdAt: {
        type: Date,
        default: Date.now
    },
});

module.exports = User = mongoose.model('user', UserSchema);