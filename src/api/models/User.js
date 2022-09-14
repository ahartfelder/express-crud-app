const { DataTypes } = require("sequelize");
const { sequelize } = require("../../db");


const User = sequelize.define('users', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  surname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER
  }
})

// User.sync({ alter: true })

module.exports = User
