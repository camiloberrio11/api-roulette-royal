'use strict'
const express = require('express')
const app = express()
const portSecure = process.env.PORT || '8094'

app.get('/', (req, res) => {
  res.send(`
  <div class="center">
      <div class="logo">
          <img width="250" alt="Logo de casino" src="https://res.cloudinary.com/dupegtamn/image/upload/v1598104547/casino-roluete_jpe5hz.png">
      </div>
      <br>
      <div>
          <h4 id="version">Version desplegada: master</h4>
      </div>
  </div>
`)
})

app.listen(portSecure, () => {
  console.log(`Server running on port: ${portSecure}`)
})