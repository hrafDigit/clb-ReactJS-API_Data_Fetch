// // backend/controllers/posts.js
// const Post = require('../models/post');

// // CRUD behavior
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
//         .catch(() => res.status(400).json({ msg: 'Something went wrong while getting all posts' }))
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



const User = require('../models/user');
const Post = require('../models/post');

exports.create = (req, res) => {
    User.findById(req.user.id)
    .select('-password')
    .then(user => {
        const newPost = new Post({
            title: req.body.title,
            post: req.body.post,
            auth_id: req.user.id,
            auth_user: user.name
        })
        newPost
        .save()
        .then(data => res.json(data))
        .catch(() => res.status(400).json({
                msg: 'Something went wrong'
            })
        )
    })
}

exports.get = (req, res) => {
    Post
    .find()
    .then(posts => res.json(posts))
    .catch(() => res.status(400).json({ 
            msg: 'Something went wrong' 
        })
    )
}

exports.getUserPost = (req, res) => {
    User.findById(req.user.id)
    .then(user => {
        Post.find({ 'auth_id': user.id })
        .then(posts => res.json(posts))
        .catch(() => res.status(400).json({ 
                msg: 'Something went wrong'
            })
        )
    })
}

exports.update = (req, res) => {
    User.findById(req.user.id)
    .select('-password')
    .then(user => {
        Post
        .find({ 'auth_id': req.user.id })
        .then(() => {
            Post
            .findByIdAndUpdate(req.body.id, req.body)
            .then(post => res.json(post))
            .catch(() => res.status(400).json({
                    msg: 'Something went wrong'
                })
            )
        })
        .catch(() => res.status(400).json({
                msg: 'Something went wrong'
            })
        )
    })
}

exports.delete = (req, res) => {
    User.findById(req.user.id)
    .select('-password')
    .then(user => {
        Post
        .find({ 'auth_id': req.user.id })
        .then(() => {
            Post
            .findByIdAndDelete(req.body.id)
            .then(post => res.json(post))
            .catch(() => res.status(400).json({
                    msg: 'Something went wrong'
                })
            )
        })
        .catch(() => res.status(400).json({
                msg: 'Something went wrong'
            })
        )
    })
}