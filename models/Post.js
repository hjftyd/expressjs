const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema ({
    title: {
        type: String,
        required: true,
        unique: true
    },
    short_description: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    category: {
        type: Array,
        required: false
    },
    tag: {
        type: Array,
        required: false
    },
    created: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("Post", PostSchema)