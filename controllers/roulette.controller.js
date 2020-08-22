'use strict'
const { serviceResponse, generateIdRandom } = require('../utils/general')
const { findRouletteById, saveRoulette } = require('../utils/roulette.utils')
const createRoulette = async(req, res) => {
  try {
    const idroulette = generateIdRandom()
    const newRoulette = { ...req.body, idroulette }
    // Guardar nueva ruleta
    await saveRoulette(newRoulette)
    return serviceResponse(200, idroulette, null, true, res)
  } catch (error) {
    const { message } = error
    return serviceResponse(500, null, message, false, res)
  }
}
const openRoulette = async (req, res) => {
  try {
    const { idroulette } = req.params
    const rouletteExists = await findRouletteById(idroulette)
    if (rouletteExists) {
      // Actualizar con estado true
      return serviceResponse(200, `Ruleta ${idroulette} abierta`, null, true, res)
    }
    return serviceResponse(400, null, `La ruleta ${idroulette} no se encuentra creada` , true, res)
  } catch (error) {
    const { message } = error
    return serviceResponse(500, null, message, false, res)
  }
}

const closeRoulette = async (req, res) => {
  try {
    const { idroulette } = req.params
    const rouletteExists = await findRouletteById(idroulette)
    if (rouletteExists) {
      // Actualizar con estado false
      return serviceResponse(200, `Ruleta ${idroulette} cerrada`, null, true, res)
    }
    return serviceResponse(400, null, `La ruleta ${idroulette} no se encuentra creada` , true, res)
  } catch (error) {
    const { message } = error
    return serviceResponse(500, null, message, false, res)
  }
}
const roulettesList = (req, res) => {
  try {
    // Hacer consulta
    const listRoulettes = []
    if (listRoulettes.length > 0) {
      return serviceResponse(200, listRoulettes, null, true, res)
    }
    return serviceResponse(400, listRoulettes, 'No se encuentran ruletas creadas', false, res)
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
