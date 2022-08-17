const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name: String,
    email: String,
    image: String,
    userType: {
        type: Number,
        default: 2
    },

})

module.exports = mongoose.model('Student', studentSchema)