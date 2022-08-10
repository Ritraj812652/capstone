const express = require('express')
const tutor = require('../models/tutor')
const router = express.Router()
const Tutor = require('../models/tutor')


// All tutor route
router.get('/', async (req, res) => {

    try {
        const tutor = await Tutor.find()
        res.jsonp(tutor)
    } catch (error) {
        res.redirect('/')
    }
    res.jsonp(tutor)

})

// // New tutor route
// router.get('/new', (req, res) => {
//     res.render('tutor/new', { tutor: new Tutor() })
// })

// create tutor route
router.post('/', (req, res) => {
    res.send('Create')
})

module.exports = router