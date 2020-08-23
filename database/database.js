'use strict'
const { connect } = require('mongoose')
require('dotenv').config()
const parametersBD = {
  useNewUrlParser: true,
  poolSize: 5,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}
async function connectDatabase () {
  try {
    await connect(process.env.HOSTDB, parametersBD)
  } catch (error) {
    const { message } = error
    console.log(`Error database ${message}`)
  }
}
module.exports = {
  connectDatabase
}
