/* --- backend/controllers/usersController.js --- */
// --- newDefault + Jwt ---
const User = require('../models/userModel');

/* --- CRUD behavior --- */
// Create a new user
// async function createUser(req, res) {
//     try {
//         const newUser = await User.create(req.body);
//         res.status(201).json(newUser);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// }
// Get all users
async function getUsers(req, res) {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
// Get a single user (by its identifier)
/* 
Habituelllement, on choisit 'id' comme identifiant de récupération de la donnée !
Ici, on va au-delà, on faisant une abstraction de l'identifiant — "abstract the identifier" —
pour nous laisser le choix entre tel ou tel type d'identifiant ex. 'id', nom d'utilisateur, email, etc. 
*/
async function getUserByIdentifier(req, res) {
    try {
        // const identifier = req.params.identifier;
        // const user = await User.findOne({ $or: [{ _id: identifier }, { username: identifier }, { email: identifier }, { firstName: identifier }] });
        const user = await User.findById(req.params._id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
// Update a single user (by its ID or identifier)
async function updateUser(req, res) {
    try {
        // const identifier = req.params.identifier;
        // const updatedUser = await User.findByIdAndUpdate(
        //     { $or: [{ email: identifier }, { username: identifier }] },
        //     req.body,
        //     { new: true, runValidators: true }
        // );
        const updatedUser = await User.findByIdAndUpdate(req.params._id, req.body, {new: true,runValidators: true,});
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
// Delete a single user (by its ID)
async function deleteUser(req, res) {
    try {
        await User.findByIdAndDelete(req.params._id);
        res.status(204).end();
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// module.exports = { createUser, getUsers, getUserByIdentifier, updateUser, deleteUser };
module.exports = { getUsers, getUserByIdentifier, updateUser, deleteUser };


// // Create a user
// exports.create = (req, res) => {
//     const newUser = new User({
//         email: req.body.email,
//         password: req.body.password,
//         firstName: req.body.firstname,
//         lastName: req.body.lastName,
//         phoneNumber: req.body.phoneNumber,
//         address: req.body.address
//     })
//     newUser
//         .save()
//         .then(data => res.json(data))
//         .catch(() => res.status(400).json({
//                 msg: 'Something went wrong while creating a user'
//             })
//         )
// }
// // Read – Get all the users
// exports.get = (req, res) => {
//     User
//         .find()
//         .then(users => res.json(users))
//         .catch(() => res.status(400).json({
//                 msg: 'Something went wrong while retrieving all users'
//             })
//         )
// }
// // Update a user
// exports.update = (req, res) => {
//     User
//         .findByIdAndUpdate(req.body.id, req.body)
//         .then(user => res.json(user))
//         .catch(() => res.status(400).json({
//                 msg: 'Something went wrong while updating a user'
//             })
//         )
// }
// // Delete a user
// exports.delete = (req, res) => {
//     User
//         .findByIdAndDelete(req.body.id)
//         .then(user => res.json(user))
//         .catch(() => res.status(400).json({
//                 msg: 'Something went wrong while deleting a user'
//             })
//         )
// }






// ---------------------------------------------------------------------------------
// /* --- backend/controllers/users.js --- */
// // - Default -
// const User = require('../models/user');

// /* --- CRUD behavior --- */
// // Create a user
// exports.create = (req, res) => {
//     const newUser = new User({
//         email: req.body.email,
//         password: req.body.password,
//         firstName: req.body.firstname,
//         lastName: req.body.lastName,
//         phoneNumber: req.body.phoneNumber,
//         address: req.body.address
//     })
//     newUser
//         .save()
//         .then(data => res.json(data))
//         .catch(() => res.status(400).json({
//             msg: 'Something went wrong while creating a user'
//         })
//         )
// }
// // Read – Get all the users
// exports.get = (req, res) => {
//     User
//         .find()
//         .then(users => res.json(users))
//         .catch(() => res.status(400).json({
//             msg: 'Something went wrong while retrieving all users'
//         })
//         )
// }
// // Update a user
// exports.update = (req, res) => {
//     User
//         .findByIdAndUpdate(req.body.id, req.body)
//         .then(user => res.json(user))
//         .catch(() => res.status(400).json({
//             msg: 'Something went wrong while updating a user'
//         })
//         )
// }
// // Delete a user
// exports.delete = (req, res) => {
//     User
//         .findByIdAndDelete(req.body.id)
//         .then(user => res.json(user))
//         .catch(() => res.status(400).json({
//             msg: 'Something went wrong while deleting a user'
//         })
//         )
// }