'use strict'
const { serviceResponse, generateIdRandom } = require('../utils/general')
const createRoulette = (req, res) => {
  try {
    console.log(req.body)
  } catch (error) {
    const { message } = error
    return serviceResponse(500, null, message, false, res)
  }
}
const openRoulette = (req, res) => {
  try {
    const { idroulette } = req.params
    const a = 2
  } catch (error) {
    const { message } = error
    return serviceResponse(500, null, message, false, res)
  }
}

const closeRoulette = (req, res) => {
  try {
    const { idroulette } = req.params
    const a = 2
  } catch (error) {
    const { message } = error
    return serviceResponse(500, null, message, false, res)
  }
}
const roulettesList = (req, res) => {
  try {
    const a = generateIdRandom()
    return serviceResponse(200, a, null, true, res)
  } catch (error) {
    const { message } = error
    return serviceResponse(500, null, message, false, res)
  }
}
module.exports = {
  createRoulette,
  openRoulette,
  closeRoulette,
  roulettesList
}
