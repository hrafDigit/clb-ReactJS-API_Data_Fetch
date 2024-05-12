/* --- backend/models/post.js --- */
// - Default -
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    post: {
        type: String,
        required: true
    },
    register_date: {
        type: Date,
        default: Date.now
    }
});

// const Post = model('post', PostSchema);
// module.exports = Post;
// OR shorter
module.exports = Post = mongoose.model('post', PostSchema);