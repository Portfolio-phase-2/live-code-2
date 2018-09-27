const express = require('express')
const router = express.Router()
const { register, login, getOne } = require('../controllers/user.controller')
const isLogin = require('../middlewares/isLogin')

router.post('/register', register)
router.post('/login', login)
router.get('/one', isLogin, getOne)

module.exports = router
