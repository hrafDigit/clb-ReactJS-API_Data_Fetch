/* --- backend/routes/api/routeUsers.js --- */
// - Default -
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

// Get all users
router.get('/', usersController.getUsers);

// Get a single user (by its ID)
router.get('/:_id', usersController.getUserByIdentifier);
// Update a user (by its ID)
router.put('/:_id', usersController.updateUser);
// Delete a user (by its ID)
router.delete('/:_id', usersController.deleteUser);

// /* !! Better NOT exposing the MongoDB _id directly in the URL !! */
// /* !! set or choose a more user-friendly identifier, such as the username !! */
// // Get a single user (by its ID)
// router.get('/:email', usersController.getUserById);
// // Update a user (by its ID)
// router.put('/:email', usersController.updateUser);
// // Delete a user (by its ID)
// router.delete('/:email', usersController.deleteUser);

module.exports = router;





// ----------------------------------------------------------------
// // - Default -
// const express = require('express');
// const router = express.Router();
// const usersController = require('../../controllers/users');

// router.post('/add', usersController.create);
// router.get('/get', usersController.get);
// router.put('/update-user', usersController.update);
// router.delete('/delete-user', usersController.delete);

// module.exports = router;





// const express = require('express');
// const router = express.Router();
// const authController = require('../../controllers/auth-user');
// const auth = require('../../middleware/auth');

// router.get('/get', auth, authController.get);

// module.exports = router;