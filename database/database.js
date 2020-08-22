'use strict'
const { Pool } = require('pg')
require('dotenv').config()
const querysDB = require('./sql/initScripts')

const connectionDB = new Pool({
  host: process.env.HOSTDB,
  user: process.env.USERDB,
  password: process.env.PASSDB,
  database: process.env.NAMEDB,
  port: process.env.PORTDB
})

const runScriptsInit = async () => {
  for (const { script } of querysDB) {
    await connectionDB.query(script)
  }
}

module.exports = {
  connectionDB,
  runScriptsInit
}
