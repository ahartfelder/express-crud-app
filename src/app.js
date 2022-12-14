const express = require('express')
const router = require('./routes/routes')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())
app.use('/users', router)

const listener = app.listen(3000, () => {
  console.log(`App is running on port ${listener.address().port}`)
})
