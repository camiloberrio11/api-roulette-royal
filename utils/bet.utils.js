'use strict'
const { generateIdRandom } = require('./general')
const { connectionDB } = require('../database/database')
const { scriptCreateBet, scriptGetBetsRouletteId } = require('../database/sql/betOnRoulette/betOnRoulette.scripts')

function isValidBet (betPending) {
  try {
    if (isvalidAmountOfMoney(betPending) && isValidNumberOrColor(betPending)) {
      return true
    }
    return false
  } catch (error) {
    return false
  }
}

function isvalidAmountOfMoney ({ money } = 0) {
  try {
    return (money > 0 && money < 10000)
  } catch (error) {
    return false
  }
}

function isValidNumberOrColor ({ isRed = false, isBlack = false, betNumber = null }) {
  try {
    if (isValidNumberBet(betNumber) || isBlack || isRed) {
      return true
    }
    return false
  } catch (error) {
    return false
  }
}

function isValidNumberBet (number) {
  return (number > 0 && number <= 37)
}

async function saveBetOnRoulette (newBet) {
  const idBet = generateIdRandom()
  const queryCreateBet = scriptCreateBet({ ...newBet, idBet })
  const saveBet = await connectionDB.query(queryCreateBet)
  return saveBet
}

async function getBetsByRouletteId (idroulette) {
  const queryDB = scriptGetBetsRouletteId(idroulette)
  const bets = await connectionDB.query(queryDB)
  return bets.rows
}

module.exports = {
  isValidBet,
  saveBetOnRoulette,
  getBetsByRouletteId
}
