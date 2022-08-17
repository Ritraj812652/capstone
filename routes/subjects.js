const express = require('express')
const subjects = require('../models/subjects')
const router = express.Router()
const Subjects = require('../models/subjects')


// All tutor route
router.get('/', async (req, res) => {

    try {
        const subjects = await Subjects.find()
        res.jsonp(subjects)
    } catch (error) {
        res.redirect('/')
    }
    res.jsonp(subjects)

})

// // New tutor route
// router.get('/new', (req, res) => {
//     res.render('tutor/new', { tutor: new Tutor() })
// })

// create subjects route
// router.post('/', (req, res) => {
//     res.send('Create')
// })

router.post('/', async (req, res) => {

    const subjects = new Subjects({
        name: req.body.name,
    })
    try {
        const newSubjects = await subjects.save()
        res.redirect(`subjects`)

    } catch (error) {
        console.log('Error in subject creation')
    }
})



module.exports = router