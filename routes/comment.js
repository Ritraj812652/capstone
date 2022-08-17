const express = require('express')
const comment = require('../models/comment')
const router = express.Router()
const Comment = require('../models/comment')


// All Comments 
router.get('/', async (req, res) => {

    try {
        const comment = await Comment.find()
        res.jsonp(comment)
    } catch (error) {
        res.redirect('/')
    }
    res.jsonp(comment)

})

// Add Comment
router.post('/addComment', async (req, res) => {

    const comment = new Comment({
        ratingId: req.body.ratingId,
        commentedById: req.body.commentedById,
        commentedByName: req.body.commentedByName,
        commentedByImage: req.body.commentedByImage,
        comment: req.body.comment,
        timestamp: req.body.timestamp
    })
    try {
        const newComment = await comment.save()
        res.redirect('/comment')

    } catch (error) {
        console.log('Error in comment creation')
    }
})

// All comments for particular rating
router.get('/:ratingId', async (req, res) => {

    try {
        const comment = await Comment.find({ ratingId: req.params.ratingId })
        res.jsonp(comment)
    } catch (error) {
        res.redirect('/')
    }
    res.jsonp(comment)

})

module.exports = router;