'use strict'
const express = require('express')
const path = require('path')

const { startPageApi } = require('./controllers/startpage.controller')
const app = express()
const portSecure = process.env.PORT || '8094'

app.set('public', path.join(__dirname, '/public'))
app.get('/', startPageApi)

app.listen(portSecure, () => {
  console.log(`Server running on port: ${portSecure}`)
})