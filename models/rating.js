const mongoose = require('mongoose')

const ratingSchema = new mongoose.Schema({
    reviewedById: String,
    reviewedByName: String,
    reviewdByImage: String,
    tutorId: String,
    rating: {
        type: Number,
        default: 0.0,
    },
    comment: String,
    timestamp: {
        type: Number,
        default: 19000101
    }
})

module.exports = mongoose.model('Rating', ratingSchema)