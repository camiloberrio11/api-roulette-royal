'use strict'
const path = require('path')
const fs = require('fs')

function serviceResponse (codeHttp, responseData, error, isSuccess, res) {
  return res.status(codeHttp).json({
    Errors: [error],
    Result: responseData,
    isSuccess
  })
}
function getVersionProject () {
  try {
    const pathFile = path.join(__dirname, '../public/version.json')
    const contentFile = fs.readFileSync(pathFile)
    return JSON.parse(contentFile)
  } catch (error) {
    return null
  }
}

function createVersionProject () {
  const getRepoInfo = require('git-repo-info')
  const [args] = process.argv.slice(2)
  if (args === 'git') {
    const gitInfo = getRepoInfo()
    const info = {
      Sha: gitInfo.sha,
      Branch: gitInfo.branch,
      CommitterDate: gitInfo.committerDate,
      LastTag: gitInfo.bralastTagnch
    }
    fs.writeFileSync(path.join(__dirname, '../public/version.json'), JSON.stringify(info))
  }
}
module.exports = {
  serviceResponse,
  getVersionProject,
  createVersionProject
}
