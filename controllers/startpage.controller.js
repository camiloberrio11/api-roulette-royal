'use strict'
const { getVersionProject } = require('../utils/general')
const startPageApi = (req, res) => {
  const gitVersionBranch = getVersionProject()
  res.send(`
  <div class="center">
      <div class="logo">
          <img width="250" alt="Logo de casino" src="https://res.cloudinary.com/dupegtamn/image/upload/v1598104547/casino-roluete_jpe5hz.png">
      </div>
      <br>
      <div>
          <h4 id="version">Version desplegada: ${gitVersionBranch.Branch}</h4>
      </div>
  </div>
`
  )
}
module.exports = {
  startPageApi
}
