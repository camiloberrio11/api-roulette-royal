'use strict'
const { generateIdRandom } = require('../utils/general')
const Roulette = require('../models/Roulette')

async function getRouletteStatus ({ idroulette = null }) {
  try {
    const statusRoulette = await Roulette.findOne({ idroulette: +idroulette }, { status: true })
    return statusRoulette
  } catch (error) {
    return false
  }
}
async function saveRoulette () {
  const idRoulette = generateIdRandom()
  const dateCurrent = new Date().toISOString()
  const paramsRoulette = { idroulette: idRoulette, status: false, date_created: dateCurrent }
  const rouletteNew = new Roulette(paramsRoulette)
  await rouletteNew.save()
  return idRoulette
}
async function getAllRoulettes () {
  const listRoulettes = await Roulette.find({}, { _id: false, __v: false })
  return listRoulettes
}
async function changeStatusRoulette ({ idroulette, statusNew }) {
  const newRouletteUpdated = await Roulette.updateOne({ idroulette: +idroulette }, { status: statusNew })
  return newRouletteUpdated
}
async function findRouletteById (idroulette) {
  const oneRoulette = await Roulette.findOne({ idroulette: +idroulette })
  return oneRoulette
}
module.exports = {
  getRouletteStatus,
  saveRoulette,
  getAllRoulettes,
  changeStatusRoulette,
  findRouletteById
}
