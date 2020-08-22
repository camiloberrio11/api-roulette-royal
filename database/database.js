'use strict'
const { Pool } = require('pg')
require('dotenv').config()
const querysDB = require('./sql/initScripts')

const conexionDB = new Pool({
  host: process.env.HOSTDB,
  user: process.env.USERDB,
  password: process.env.PASSDB,
  database: process.env.NAMEDB,
  port: process.env.PORTDB
})

const runScriptsInit = async () => {
  for (const { script } of querysDB) {
    await conexionDB.query(script)
  }
  await conexionDB.end()
}

module.exports = {
  conexionDB,
  runScriptsInit
}
