const express = require('express')
const router = express.Router()
const user = require('./user.route')
const twit = require('./twit.route')

router.use('/users', user)
router.use('/twits', twit)
router.get('/', (req, res) => {
  res.send('Ujian Asrul API')
})

module.exports = router
