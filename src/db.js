const { Sequelize } = require('sequelize')
require('dotenv').config()
const { DB_DATA, DB_USER, DB_PASS, DB_HOST, DB_DIAL } = process.env

const sequelize = new Sequelize(
  DB_DATA,
  DB_USER,
  DB_PASS,
  {
    host: DB_HOST,
    dialect: DB_DIAL
  }
)

const run = async () => {
  try {
    await sequelize.authenticate()
    console.log('Connected successfully to MySQL DB')
  } catch (error) {
    console.log(error)
  }
}

run()

module.exports = {
  Sequelize,
  sequelize
}