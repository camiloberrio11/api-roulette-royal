'use strict'
const { serviceResponse } = require('../utils/general')
const { isValidBet, saveBetOnRoulette, getBetsByRouletteId } = require('../utils/bet.utils')
const { getRouletteStatus, findRouletteById } = require('../utils/roulette.utils')
const betOnRoulette = async (req, res) => {
  try {
    const { userid } = req.headers
    const betPending = { ...req.body, userid }
    const isOpenRoulette = await getRouletteStatus(betPending)
    if (isOpenRoulette) {
      const isValidBetOnRoulette = isValidBet(betPending)
      if (isValidBetOnRoulette) {
        await saveBetOnRoulette(betPending)
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
const getBetsOnRoulette = async (req, res) => {
  try {
    const { idroulette } = req.params
    const roluetteExist = await findRouletteById(idroulette)
    if (roluetteExist) {
      const bets = await getBetsByRouletteId(idroulette)
      if (bets.length > 0) {
        return serviceResponse(200, bets, null, true, res)
      }
      return serviceResponse(400, null, `La ruleta ${idroulette} no posee apuestas`, true, res)
    }
    return serviceResponse(400, null, 'No existe esta ruleta', false, res)
  } catch (error) {
    const { message } = error
    return serviceResponse(500, null, message, false, res)
  }
}
module.exports = {
  betOnRoulette,
  getBetsOnRoulette
}
