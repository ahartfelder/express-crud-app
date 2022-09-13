const { index } = require('../api/controllers/usersController')
const router = require('express').Router()

router.get('/', index)

module.exports = router
