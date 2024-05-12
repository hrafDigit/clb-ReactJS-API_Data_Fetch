// backend/controllers/contacts.js
const Contact = require('../models/contact');

/* --- CRUD behavior --- */
// Create a contact
exports.create = (req, res) => {
    const newContact = new Contact({
        phoneNumberMain: req.body.phoneNumberMain,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        address: req.body.address,
        email: req.body.email,
        phoneNumberTwo: req.body.phoneNumberTwo,
        dob: req.body.dob,
        profilePhoto: req.body.profilePhoto,
        website: req.body.website,
        socialProfiles: req.body.socialProfiles,
    })
    newContact
        .save()
        .then(data => res.json(data))
        .catch(() => res.status(400).json({
            msg: 'Something went wrong while creating a contact'
        }))
}
// Read – Get all the contacts
exports.get = (req, res) => {
    Contact
        .find()
        .then(contacts => res.json(contacts))
        .catch(() => res.status(400).json({ msg: 'Something went wrong while retrieving all contacts' }))
}
// Update a contact
exports.update = (req, res) => {
    Contact
        .findByIdAndUpdate(req.body.id, req.body)
        .then(contact => res.json(contact))
        .catch(() => res.status(400).json({ msg: 'Something went wrong while updating a contact' }))
}
// Delete a contact
exports.delete = (req, res) => {
    Contact
        .findByIdAndDelete(req.body.id)
        .then(contact => res.json(contact))
        .catch(() => res.status(400).json({ msg: 'Something went wrong while deleting a contact' }))
}



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