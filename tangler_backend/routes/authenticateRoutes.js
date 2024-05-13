/* --- backend/routes/authenticateRoutes.js --- */
// - Default -
const express = require('express');
const router = express.Router();
const usersAuthController = require('../controllers/usersAuthController');

// Register a new user
router.post('/register', usersAuthController.register); // Assuming register is defined in usersAuthController
// Login a user
router.post('/login', usersAuthController.login); // Assuming login is defined in usersAuthController

module.exports = router; // Use module.exports instead of export default