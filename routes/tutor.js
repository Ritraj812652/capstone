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

router.post('/create', async (req, res) => {

    const tutor = new Tutor({
        name: req.body.name,
        email: req.body.email,
        image: req.body.image,
        phone: req.body.phone,
        userType: req.body.userType,
        overallRating: req.body.overallRating,
        subjectId: req.body.subjectId,
        bio: req.body.bio,
        hrlyRate: req.body.hrlyRate
    })
    try {
        const newTutor = await tutor.save()
        res.redirect('/tutor')

    } catch (error) {
        console.log('Error in Tutor creation')
    }


})

//Update Tutor
router.put('/:id', async (req, res) => {
    let tutor
    try {
        tutor = await Tutor.findByIdAndUpdate(req.params.id,
            {
                name: req.body.name,
                image: req.body.image,
                phone: req.body.phone,
                bio: req.body.bio,
                subjectId: req.body.subjectId,
                hrlyRate: req.body.hrlyRate,
                overallRating: req.body.overallRating,
            })
        // tutor.name = req.body.name,
        //     tutor.email = req.body.email,
        //     tutor.image = req.body.image,
        //     tutor.phone = req.body.phone,
        //     tutor.userType = req.body.usertype,
        //     tutor.overallRating = req.body.overallRating,
        //     tutor.subjectId = req.body.subjectId,
        //     tutor.bio = req.body.bio
        // await tutor.save()
        res.jsonp(tutor)
    } catch (error) {
        console.log(error)
        res.redirect('/tutor')
    }
})
// Delete Tutor
router.delete('/:id', async (req, res) => {
    let tutor
    try {
        tutor = await Tutor.findByIdAndDelete(req.params.id)
        res.redirect('/tutor')
    } catch (error) {
        console.log(error)
    }
})

//View single Tutor
router.get('/:email', async (req, res) => {
    console.log(req.params.email)
    try {
        const tutor = await Tutor.find({ email: req.params.email })
        res.jsonp(tutor)
    } catch (error) {
        res.redirect('/tutor')
    }

})

module.exports = router