const User = require("../models/User")

const index = async (req, res) => {
  const users = await User.findAll()
  res.send(users)
}

module.exports = {
  index
}
