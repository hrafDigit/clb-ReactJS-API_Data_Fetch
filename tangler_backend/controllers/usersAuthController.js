/* --- backend/controllers/controllerUsersAuth.js --- */
// --- newDefault + Jwt ---
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require('config');
const User = require('../models/userModel');
// Register a new user
async function register(req, res) {
    try {
        const { email, password, confirm_password } = req.body;

        // Simple validation
        if (!email || !password || !confirm_password) {
            return res.status(400).json({
                status: 400,
                msg: 'Please enter all the fields'
            });
        }

        // Check for existing user
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                status: 400,
                msg: 'User already exists'
            });
        }

        // Validate password strength
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
        if (!passwordRegex.test(password)) {
            return res.status(400).json({
                status: 400,
                msg: 'Password must contain at least one digit, one lowercase, one uppercase letter, one special character, and be at least 8 characters long'
            });
        }

        // Check if passwords match
        if (password !== confirm_password) {
            return res.status(400).json({
                status: 400,
                msg: 'Passwords do not match'
            });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const newUser = new User({
            email,
            password: hashedPassword
        });

        // Save user to database
        const savedUser = await newUser.save();

        // Generate JWT token
        const token = jwt.sign({ id: savedUser._id }, config.get('jwtSecret'), { expiresIn: 3600 });

        // Return success response with token and user data
        res.status(201).json({
            status: 201,
            token,
            user: {
                id: savedUser._id,
                email: savedUser.email
            }
        });
    } catch (error) {
        // Handle unexpected errors
        console.error('Error in register function:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}


// Login
async function login(req, res) {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        // Compare hashed passwords
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        // If passwords match, generate JWT token
        jwt.sign(
            { id: user._id },
            config.get('jwtSecret'),
            { expiresIn: 3600 },
            (err, token) => {
                if (err) throw err;
                res.json({
                    status: 200,
                    token,
                    user: {
                        id: user._id,
                        email: user.email
                    }
                });
            }
        );
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = { register, login };








// // --- Default ---
// const User = require('../models/user');
// // Register a new user
// async function register(req, res) {
//     try {
//         const { email, password } = req.body;
//         // Since we're not using bcrypt, we'll store the password as is
//         const newUser = await User.create({ email, password });
//         res.status(201).json(newUser);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// }

// // Login
// async function login(req, res) {
//     try {
//         const { email, password } = req.body;
//         const user = await User.findOne({ email });
//         if (!user) {
//             return res.status(401).json({ message: 'Invalid email or password' });
//         }
//         // Since we're not using bcrypt, we'll compare the password directly
//         if (password !== user.password) {
//             return res.status(401).json({ message: 'Invalid email or password' });
//         }
//         // Return the user object without generating JWT token
//         res.status(200).json(user);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// }

// module.exports = { register, login };