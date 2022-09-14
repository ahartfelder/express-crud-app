const { index, show, update, destroy, create } = require('../api/controllers/usersController')
const router = require('express').Router()

router.use((req, res, next) => {
  const time = new Date
  console.log(`[${time.toLocaleString('pt-BR')}]`, req.method, req.baseUrl)
  next()
})

router
  .get('/', index)
  .post('/', create)

router
  .route('/:id')
  .get(show)
  .put(update)
  .patch(update)
  .delete(destroy)

router.param('id', (req, res, next, id) => {
  req.userId = id
  next()
})

module.exports = router
