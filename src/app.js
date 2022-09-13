const express = require('express')
const router = require('./routes/routes')
const app = express()

app.use(router)

const listener = app.listen(3000, () => {
  console.log(`App is running on port ${listener.address().port}`)
})
