'use strict'
const { serviceResponse } = require('../utils/general')
const betOnRoulette = (req, res) => {
  try {
    console.log(req, res)
    return serviceResponse(200, {}, null, true, res)
  } catch (error) {
    const { message } = error
    return serviceResponse(500, null, message, false, res)
  }
}
module.exports = {
  betOnRoulette
}