const express = require('express')
require('dotenv').config()

const indexRouter = require('./routes/index')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

indexRouter(app)

const port = process.env.PORT || 3000

app.listen(port, () => console.log('Listening on port ' + port))
module.exports = app
