'use strict'
const { serviceResponse } = require('../utils/general')
const { findRouletteById, saveRoulette, getAllRoulettes, changeStatusRoulette } = require('../utils/roulette.utils')
const createRoulette = async (req, res) => {
  try {
    const idNewRoulette = await saveRoulette()
    return serviceResponse(200, idNewRoulette, null, true, res)
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
      const paramsRoulette = { idroulette, statusNew: true }
      await changeStatusRoulette(paramsRoulette)
      return serviceResponse(200, `Ruleta ${idroulette} abierta`, null, true, res)
    }
    return serviceResponse(400, null, `La ruleta ${idroulette} no se encuentra creada`, true, res)
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
      const paramsRoulette = { idroulette, statusNew: false }
      await changeStatusRoulette(paramsRoulette)
      return serviceResponse(200, `Ruleta ${idroulette} cerrada`, null, true, res)
    }
    return serviceResponse(400, null, `La ruleta ${idroulette} no se encuentra creada`, true, res)
  } catch (error) {
    const { message } = error
    return serviceResponse(500, null, message, false, res)
  }
}
const roulettesList = async (req, res) => {
  try {
    const listRoulettes = await getAllRoulettes()
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
