/* --- backend/routes/api/posts.js --- */
// - Default -
const express = require('express');
const router = express.Router();
const postsController = require('../../controllers/posts');

router.post('/add', postsController.create);
router.get('/get', postsController.get);
router.put('/update-post', postsController.update);
router.delete('/delete-post', postsController.delete);

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