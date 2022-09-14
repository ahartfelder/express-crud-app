const User = require("../models/User")

const index = async (req, res) => {
  const users = await User.findAll()
  res.send(users)
}

const show = async (req, res) => {
  const user = await User.findByPk(req.userId)
  res.send(user)
}

const create = async (req, res) => {
  try {
    const user = await User.create(req.body)
    res.send(user)
  } catch (error) {
    res.status(404).send({ error: error.message })
  }
}

const update = async (req, res) => {
  const user = await User.findByPk(req.userId)
  user.update(req.body)
  res.send(user)
}

const destroy = async (req, res) => {
  const user = await User.findByPk(req.userId)
  await user.destroy()
  res.send({ message: 'User successfully destroyed' })
}

module.exports = {
  index,
  show,
  create,
  update,
  destroy
}
