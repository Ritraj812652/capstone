const express = require('express')
const rating = require('../models/rating')
const router = express.Router()
const Rating = require('../models/rating')


// All Ratings 
router.get('/', async (req, res) => {

    try {
        const rating = await Rating.find()
        res.jsonp(rating)
    } catch (error) {
        res.redirect('/')
    }
    res.jsonp(rating)

})


// Add a Rating
router.post('/add', async (req, res) => {

    const rating = new Rating({
        reviewedById: req.body.reviewedById,
        reviewedByName: req.body.reviewedByName,
        reviewdByImage: req.body.reviewedByImage,
        rating: req.body.rating,
        tutorId: req.body.tutorId,
        comment: req.body.comment,
        timestamp: req.body.timestamp
    })
    try {
        const newRating = await rating.save()
        res.redirect('/rating')

    } catch (error) {
        console.log('Error in rating creation')
    }
})


// All Ratings for particular tutor
router.get('/:tutorId/view', async (req, res) => {

    try {
        const rating = await Rating.find({ tutorId: req.params.tutorId })
        res.jsonp(rating)
    } catch (error) {
        res.redirect('/')
    }
    res.jsonp(rating)

})



module.exports = router