/* --- backend/models/contact.js --- */
// - Default -
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ContactSchema = new Schema({
    phoneNumberMain: {
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
    address: {
        type: String,
    },
    email: {
        type: String,
    },
    phoneNumberTwo: {
        type: String,
    },
    dob: {
        type: Date,
    },
    profilePhoto: {
        type: String,
    },
    website: {
        type: String,
    },
    socialProfiles: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

// const Contact = model('contact', ContactSchema);
// module.exports = Contact;
// OR shorter
module.exports = Contact = mongoose.model('contact', ContactSchema);