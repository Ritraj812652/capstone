const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    ratingId: String,
    commentedById: String,
    commentedByName: String,
    commentedByImage: String,
    comment: String,
    timestamp: {
        type: Number,
        default: 19000101
    }
})

module.exports = mongoose.model('Comment', commentSchema)