'use strict'
const { generateIdRandom } = require('../utils/general')
const { connectionDB } = require('../database/database')
const { scriptfindAllRoulettes, scriptFindRouletteById, scriptUpdateStatusRoulette, scriptCreateRoulette, scriptGetStatusRoulette } = require('../database/sql/roulette/roulette.scripts')
async function getRouletteStatus ({ idroulette = null }) {
  try {
    const queryDb = scriptGetStatusRoulette(idroulette)
    const roulette = await connectionDB.query(queryDb)
    const statusRoulette = (roulette.rows.length > 0) ? roulette.rows[0].status : false
    return statusRoulette
  } catch (error) {
    return false
  }
}

async function findRouletteById (idroulette = null) {
  const queryDb = scriptFindRouletteById(+idroulette)
  let oneRoulette = await connectionDB.query(queryDb)
  oneRoulette = (oneRoulette.rows.length > 0) ? oneRoulette.rows[0] : null
  return oneRoulette
}

async function saveRoulette () {
  const idRoulette = generateIdRandom()
  const paramsRoulette = { idRoulette }
  const queryCreate = scriptCreateRoulette(paramsRoulette)
  await connectionDB.query(queryCreate)
  return idRoulette
}

async function getAllRoulettes () {
  const querySelect = scriptfindAllRoulettes()
  const listRoulettes = await connectionDB.query(querySelect)
  return listRoulettes.rows
}

async function changeStatusRoulette (paramsRoulette) {
  const queryUpdate = scriptUpdateStatusRoulette(paramsRoulette)
  const rouletteUpdate = await connectionDB.query(queryUpdate)
  return rouletteUpdate
}

module.exports = {
  getRouletteStatus,
  findRouletteById,
  saveRoulette,
  getAllRoulettes,
  changeStatusRoulette
}
