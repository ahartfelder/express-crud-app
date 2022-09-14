const { Sequelize } = require('sequelize')
const { userDB, dataDB, passDB, hostDB, dialDB } = require('./config')

const sequelize = new Sequelize(
  dataDB,
  userDB,
  passDB,
  {
    host: hostDB,
    dialect: dialDB
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