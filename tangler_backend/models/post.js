const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Create Schema
const postSchema = new Schema({
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

const Post = model('post', postSchema);
module.exports = Post;
// OR shorter
// module.exports = Post = mongoose.model('post', postSchema);