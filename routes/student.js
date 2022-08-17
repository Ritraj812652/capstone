const express = require('express')
const student = require('../models/student')
const router = express.Router()
const Student = require('../models/student')


// All tutor route
router.get('/', async (req, res) => {

    try {
        const student = await Student.find()
        res.jsonp(student)
    } catch (error) {
        res.redirect('/')
    }
    res.jsonp(student)

})

// // New student route
// router.get('/new', (req, res) => {
//     res.render('student/new', { student: new Student() })
// })

// create student route

router.post('/create', async (req, res) => {

    const student = new Student({
        name: req.body.name,
        email: req.body.email,
        userType: req.body.userType,
        image: req.body.image,
    })
    try {
        const newStudent = await student.save()
        res.redirect('/student')

    } catch (error) {
        console.log('Error in Student creation')
    }


})

//View single Student
router.get('/:email', async (req, res) => {
    console.log(req.params.email)
    try {
        const student = await Student.find({ email: req.params.email })
        res.jsonp(student)
    } catch (error) {
        res.redirect('/student')
    }

})

module.exports = router