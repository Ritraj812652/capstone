const mongoose = require('mongoose')

const tutorSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phone: Number,
    address: String,
})

module.exports = mongoose.model('Tutor', tutorSchema)