// // backend/controllers/users.js
const User = require('../models/user');

/* --- CRUD behavior --- */
// Create a user
exports.create = (req, res) => {
    const newUser = new User({
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.firstname,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address
    })
    newUser
        .save()
        .then(data => res.json(data))
        .catch(() => res.status(400).json({
                msg: 'Something went wrong while creating a user'
            })
        )
}
// Read – Get all the users
exports.get = (req, res) => {
    User
        .find()
        .then(users => res.json(users))
        .catch(() => res.status(400).json({
                msg: 'Something went wrong while retrieving all users'
            })
        )
}
// Update a user
exports.update = (req, res) => {
    User
        .findByIdAndUpdate(req.body.id, req.body)
        .then(user => res.json(user))
        .catch(() => res.status(400).json({
                msg: 'Something went wrong while updating a user'
            })
        )
}
// Delete a user
exports.delete = (req, res) => {
    User
        .findByIdAndDelete(req.body.id)
        .then(user => res.json(user))
        .catch(() => res.status(400).json({
                msg: 'Something went wrong while deleting a user'
            })
        )
}

