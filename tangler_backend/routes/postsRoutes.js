/* --- backend/routes/postsRoutes.js --- */
// - Default -
const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');

// Create a new post
router.post('/add-post', postsController.createPost);
// Get all posts
router.get('/', postsController.getPosts);
// Get a single post (by its ID)
router.get('/:_id', postsController.getPostById);
// Update a single post (by its ID)
router.put('/:_id', postsController.updatePost);
// Delete a single post (by its ID)
router.delete('/:_id', postsController.deletePost);

module.exports = router;



// const express = require('express');
// const router = express.Router();
// const postsController = require('../../controllers/posts');
// const auth = require('../../middleware/auth');

// router.get('/get-user-posts', auth, postsController.getUserPost);
// router.post('/add', auth, postsController.create);
// router.get('/get', postsController.get);
// router.put('/update-post', auth, postsController.update);
// router.delete('/delete-post', auth, postsController.delete);

// module.exports = router;