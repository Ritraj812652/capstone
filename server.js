const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const indexRouter = require('./routes/index')
const tutorRouter = require('./routes/tutor')
const subjectRouter = require('./routes/subjects')
const studentRouter = require('./routes/student')
const ratingRouter = require('./routes/rating')
const commentRouter = require('./routes/comment')

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))

const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://RJ:123@cluster0.mhsxpsl.mongodb.net/kuebeeko?retryWrites=true&w=majority", { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to mongoose'))

app.use('/', indexRouter)
app.use('/tutor', tutorRouter)
app.use('/subjects', subjectRouter)
app.use('/student', studentRouter)
app.use('/comment', commentRouter)
app.use('/rating', ratingRouter)


app.listen(8000);