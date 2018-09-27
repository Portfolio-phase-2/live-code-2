const express = require('express')
const router = express.Router()
const { register, login, getOne, getAllRand } = require('../controllers/user.controller')
const isLogin = require('../middlewares/isLogin')

router.post('/register', register)
router.post('/login', login)
router.get('/one', isLogin, getOne)
router.get('/', isLogin, getAllRand)

module.exports = router
