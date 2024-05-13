// backend/controllers/controllerContacts.js
// - Default -
const Contact = require('../models/contactModel');


/* --- CRUD behavior --- */
// Create a new user
async function createContact(req, res) {
    try {
        const newContact = await Contact.create(req.body);
        res.status(201).json(newContact);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
// Get all contacts
async function getContacts(req, res) {
    try {
        const contacts = await Contact.find();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
// Get a single user by its ID
async function getContactById(req, res) {
    try {
        const contact = await Contact.findById(req.params._id);
        if (!contact) {
            return res.status(404).json({ message: 'contact not found' });
        }
        res.status(200).json(contact);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
// Update a contact (by its ID)
async function updateContact(req, res) {
    try {
        const updatedContact = await Contact.findByIdAndUpdate(
            req.params._id, req.body, 
            {
                new: true,
                runValidators: true,
            }
        );
        res.status(200).json(updatedContact);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
// Delete a user (by its ID)
async function deleteContact(req, res) {
    try {
        await Contact.findByIdAndDelete(req.params._id);
        res.status(204).end();
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = { createContact, getContacts, getContactById, updateContact, deleteContact };


// /* --- CRUD behavior --- */
// // Create a contact
// exports.create = (req, res) => {
//     const newContact = new Contact({
//         phoneNumberMain: req.body.phoneNumberMain,
//         firstName: req.body.firstName,
//         lastName: req.body.lastName,
//         address: req.body.address,
//         email: req.body.email,
//         phoneNumberTwo: req.body.phoneNumberTwo,
//         dob: req.body.dob,
//         profilePhoto: req.body.profilePhoto,
//         website: req.body.website,
//         socialProfiles: req.body.socialProfiles,
//     })
//     newContact
//         .save()
//         .then(data => res.json(data))
//         .catch(() => res.status(400).json({
//             msg: 'Something went wrong while creating a contact'
//         }))
// }
// // Read – Get all the contacts
// exports.get = (req, res) => {
//     Contact
//         .find()
//         .then(contacts => res.json(contacts))
//         .catch(() => res.status(400).json({ msg: 'Something went wrong while retrieving all contacts' }))
// }
// // Update a contact
// exports.update = (req, res) => {
//     Contact
//         .findByIdAndUpdate(req.body.id, req.body)
//         .then(contact => res.json(contact))
//         .catch(() => res.status(400).json({ msg: 'Something went wrong while updating a contact' }))
// }
// // Delete a contact
// exports.delete = (req, res) => {
//     Contact
//         .findByIdAndDelete(req.body.id)
//         .then(contact => res.json(contact))
//         .catch(() => res.status(400).json({ msg: 'Something went wrong while deleting a contact' }))
// }



// const User = require('../models/user');
// const Post = require('../models/post');

// exports.create = (req, res) => {
//     User.findById(req.user.id)
//     .select('-password')
//     .then(user => {
//         const newPost = new Post({
//             title: req.body.title,
//             post: req.body.post,
//             auth_id: req.user.id,
//             auth_user: user.name
//         })
//         newPost
//         .save()
//         .then(data => res.json(data))
//         .catch(() => res.status(400).json({
//                 msg: 'Something went wrong'
//             })
//         )
//     })
// }

// exports.get = (req, res) => {
//     Post
//     .find()
//     .then(posts => res.json(posts))
//     .catch(() => res.status(400).json({ 
//             msg: 'Something went wrong' 
//         })
//     )
// }

// exports.getUserPost = (req, res) => {
//     User.findById(req.user.id)
//     .then(user => {
//         Post.find({ 'auth_id': user.id })
//         .then(posts => res.json(posts))
//         .catch(() => res.status(400).json({ 
//                 msg: 'Something went wrong'
//             })
//         )
//     })
// }

// exports.update = (req, res) => {
//     User.findById(req.user.id)
//     .select('-password')
//     .then(user => {
//         Post
//         .find({ 'auth_id': req.user.id })
//         .then(() => {
//             Post
//             .findByIdAndUpdate(req.body.id, req.body)
//             .then(post => res.json(post))
//             .catch(() => res.status(400).json({
//                     msg: 'Something went wrong'
//                 })
//             )
//         })
//         .catch(() => res.status(400).json({
//                 msg: 'Something went wrong'
//             })
//         )
//     })
// }

// exports.delete = (req, res) => {
//     User.findById(req.user.id)
//     .select('-password')
//     .then(user => {
//         Post
//         .find({ 'auth_id': req.user.id })
//         .then(() => {
//             Post
//             .findByIdAndDelete(req.body.id)
//             .then(post => res.json(post))
//             .catch(() => res.status(400).json({
//                     msg: 'Something went wrong'
//                 })
//             )
//         })
//         .catch(() => res.status(400).json({
//                 msg: 'Something went wrong'
//             })
//         )
//     })
// }