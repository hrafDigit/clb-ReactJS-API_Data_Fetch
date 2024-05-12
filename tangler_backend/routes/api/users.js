/* --- backend/routes/api/auth-user.js --- */
// - Default -
const express = require('express');
const router = express.Router();
const usersController = require('../../controllers/users');

router.post('/add', usersController.create);
router.get('/get', usersController.get);
router.put('/update-user', usersController.update);
router.delete('/delete-user', usersController.delete);

module.exports = router;



// const express = require('express');
// const router = express.Router();
// const authController = require('../../controllers/auth-user');
// const auth = require('../../middleware/auth');

// router.get('/get', auth, authController.get);

// module.exports = router;