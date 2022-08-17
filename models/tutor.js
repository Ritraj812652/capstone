const mongoose = require('mongoose')

const tutorSchema = new mongoose.Schema({
    name: String,
    email: String,
    image: String,
    phone: Number,
    userType: {
        type: Number,
        default: 1,
    },
    overallRating: {
        type: Number,
        default: 0.0,
    },
    subjectId: String,
    bio: String,
    hrlyRate: {
        type: Number,
        default: 20
    }
})

module.exports = mongoose.model('Tutor', tutorSchema)