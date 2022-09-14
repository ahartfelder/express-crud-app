require('dotenv').config()
const { DB_DATA, DB_USER, DB_PASS, DB_HOST, DB_DIAL } = process.env

module.exports = {
  dataDB: DB_DATA,
  userDB: DB_USER,
  passDB: DB_PASS,
  hostDB: DB_HOST,
  dialDB: DB_DIAL
}