// backend/controllers/postsController.js
// - Default -
const Post = require('../models/postModel');


/* --- CRUD behavior --- */
// Create a new post
async function createPost(req, res) {
    try {
        const newPost = await Post.create(req.body);
        res.status(201).json(newPost);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
// Get all posts
async function getPosts(req, res) {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
// Get a single post by its ID
async function getPostById(req, res) {
    try {
        const post = await Post.findById(req.params._id);
        if (!post) {
            return res.status(404).json({ message: 'post not found' });
        }
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
// Update a post (by its ID)
async function updatePost(req, res) {
    try {
        const updatedPost = await Post.findByIdAndUpdate(req.params._id, req.body,
            {
                new: true,
                runValidators: true,
            }
        );
        res.status(200).json(updatedPost);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
// Delete a post (by its ID)
async function deletePost(req, res) {
    try {
        await Post.findByIdAndDelete(req.params._id);
        res.status(204).end();
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = { createPost, getPosts, getPostById, updatePost, deletePost };










// /* --- CRUD behavior --- */
// // Create a post
// exports.create = (req, res) => {
//     const newPost = new Post({
//         title: req.body.title,
//         post: req.body.post
//     })
//     newPost
//         .save()
//         .then(data => res.json(data))
//         .catch(() => res.status(400).json({
//             msg: 'Something went wrong while creating a post'
//         }))
// }
// // Read – Get all the posts
// exports.get = (req, res) => {
//     Post
//         .find()
//         .then(posts => res.json(posts))
//         .catch(() => res.status(400).json({ msg: 'Something went wrong while retrieving all posts' }))
// }
// // Update a post
// exports.update = (req, res) => {
//     Post
//         .findByIdAndUpdate(req.body.id, req.body)
//         .then(post => res.json(post))
//         .catch(() => res.status(400).json({ msg: 'Something went wrong while updating a post' }))
// }
// // Delete a post
// exports.delete = (req, res) => {
//     Post
//         .findByIdAndDelete(req.body.id)
//         .then(post => res.json(post))
//         .catch(() => res.status(400).json({ msg: 'Something went wrong while deleting a post' }))
// }



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