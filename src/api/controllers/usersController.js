const User = require("../models/User")

const index = async (req, res) => {
  try {
    const users = await User.findAll()
    res.send(users)
  } catch (error) {
    res.status(422).send(error.message)
  }
}

const show = async (req, res) => {
  try {
    const user = await User.findByPk(req.userId)
    res.send(user)
  } catch (error) {
    res.status(422).send(error.message)
  }
}

const create = async (req, res) => {
  try {
    const user = await User.create(req.body)
    res.send(user)
  } catch (error) {
    res.status(422).send(error.message)
  }
}

const update = async (req, res) => {
  try {
    const user = await User.findByPk(req.userId)
    user.update(req.body)
    res.send(user)
  } catch (error) {
    res.status(422).send(error.message)
  }
}

const destroy = async (req, res) => {
  try {
    const user = await User.findByPk(req.userId)
    await user.destroy()
    res.send({ message: 'User successfully destroyed' })
  } catch (error) {
    res.status(422).send(error.message)
  }
}

module.exports = {
  index,
  show,
  create,
  update,
  destroy
}
