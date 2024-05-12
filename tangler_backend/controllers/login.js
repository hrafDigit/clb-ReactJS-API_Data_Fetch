// // backend/controllers/login.js
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');
// const config = require('config');

// // User Model
// const User = require('../models/user');

// exports.login = (req, res) => {

//     console.log("Hello")

//     const { email, password } = req.body;

//     // Simple validation
//     if (!email || !password) {
//         return res.json({
//             status: 400,
//             msg: 'Please enter all the fields '
//         });
//     }

//     // Check for existing user
//     User.findOne({ email })
//     .then(user => {
//         if (!user) return res.json({
//             status: 400,
//             msg: 'User does not exist '
//         });

//         // Validate password
//         bcrypt.compare(password, user.password)
//         .then(isMatch => {
//             if (!isMatch) return res.json({
//                 status: 400,
//                 msg: 'Invalid Credentials'
//             });

//             jwt.sign(
//                 { id: user.id },
//                 config.get('jwtSecret'),
//                 { expiresIn: 3600 },
//                 (err, token) => {
//                     if (err) throw err;
//                     res.json({
//                         status: 200,
//                         token,
//                         users: {
//                             id: user.id,
//                             name: user.name,
//                             email: user.email,
//                             message: "Logged in successfully"
//                         }
//                     });
//                 }
//             )
//         })
//     })
// }