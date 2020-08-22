'use strict'
const { serviceResponse } = require('../utils/general')
const { isValidBet } = require('../utils/bet.utils')
const { getRouletteStatus } = require('../utils/roulette.utils')
const betOnRoulette = async (req, res) => {
  try {
    const betPending = req.body
    const isOpenRoulette = await getRouletteStatus(betPending)
    if (isOpenRoulette) {
      const isValidBetOnRoulette = isValidBet(betPending)
      if (isValidBetOnRoulette) {
        // Crear apuesta
        return serviceResponse(200, 'Mucha suerte! Apuesta realizada', null, true, res)
      }
    }
    const message = (!isOpenRoulette) ? 'La ruleta se encuentra cerrada' : 'La apuesta no es válida'
    return serviceResponse(400, null, message, false, res)
  } catch (error) {
    const { message } = error
    return serviceResponse(500, null, message, false, res)
  }
}
module.exports = {
  betOnRoulette
}
