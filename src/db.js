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

sequelize.sync().then(() => console.log(`Connected to ${dataDB} database`))

module.exports = {
  Sequelize,
  sequelize
}