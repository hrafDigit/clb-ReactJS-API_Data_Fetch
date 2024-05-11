// backend/models/user.js
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const contactSchema = new Schema({
    profilePhoto: {
        type: URL,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    phoneNumberOne: {
        type: String,
    },
    phoneNumberTwo: {
        type: String,
    },
    dob: {
        type: Date,
    },
    address: {
        type: String,
    },
    email: {
        type: String,
    },
    website: {
        type: URL,
    },
    socialProfiles: {
        type: URL,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

const Contact = model('contact', contactSchema);
module.exports = Contact;
// OR shorter
// module.exports = contact = mongoose.model('contact', PostSchema);