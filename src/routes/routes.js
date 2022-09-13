const { index } = require('../api/controllers/usersController')
const router = require('express').Router()

router.get('/users', index)

module.exports = router
