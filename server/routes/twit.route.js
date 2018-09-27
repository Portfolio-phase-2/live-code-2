const express = require('express')
const router = express.Router()
const { createOne, deleteById, getAllMine, getById, putById, getAll, searchTwitByTitle } = require('../controllers/twit.controller')
const isLogin = require('../middlewares/isLogin')

router.post('/', isLogin, createOne)
router.get('/', getAll)
router.get('/mine', isLogin, getAllMine)
router.get('/:id', getById)
router.put('/:id', isLogin, putById)
router.delete('/:id', isLogin, deleteById)
router.get('/:search/search', searchTwitByTitle)

module.exports = router
