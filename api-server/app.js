const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const postsRouter = require('./routes/posts')
const morgan = require('morgan')
const morganBody = require('morgan-body')
const DB_URI = process.env.MONGOLAB_URI
const APP_PORT = process.env.PORT || 3000
const rateLimit = require('express-rate-limit')

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
})

mongoose.connect(DB_URI, { useNewUrlParser: true }).catch(error => console.log('Cannot connect to database ' + JSON.stringify(error)))

const app = express()
morganBody(app)
morgan('combined')
app.use(limiter)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

postsRouter(app)

app.listen(APP_PORT, () => console.log('Listening on port ' + APP_PORT))
module.exports = app
