'use strict'
const express = require('express')
const path = require('path')
const routes = require('./routes/routes')
const portSecure = process.env.PORT || '8094'
const { startPageApi } = require('./controllers/startpage.controller')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.set('public', path.join(__dirname, '/public'))
app.get('/', startPageApi)
app.use('/api', routes)
app.listen(portSecure, () => {
  console.log(`Server running on port: ${portSecure}`)
})
