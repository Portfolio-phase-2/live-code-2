require('dotenv').config()
const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')

let database = process.env.DATABASE_DEV
if (process.env.NODE_ENV === 'test') {
  database = process.env.DATABASE_TEST
} else if (process.env.NODE_ENV === 'prod') {
  database = process.env.DATABASE_PROD
}
mongoose.connect(database, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('Database is Connecting')
})
app.use(logger('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const indexRouter = require('./routes')
app.use('/', indexRouter)

app.listen(process.env.PORT || 3000, () => console.log(`Listening apps`))

module.exports = app
// By Asrul Harahap - 2018
