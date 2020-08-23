'use strict'
const { generateIdRandom } = require('./general')
const { connectionDB } = require('../database/database')
const Roulette = require('../models/Roulette')
const BetOnRoulette = require('../models/BetOnRoulette')

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
  const dateCurrent = new Date().toISOString()
  const buidModel = { ...newBet, date_created: dateCurrent, idbet: idBet }
  const newBetBuild = new BetOnRoulette(buidModel)
  const betRoulettedSaved = await newBetBuild.save()
  return betRoulettedSaved
}

module.exports = {
  isValidBet,
  saveBetOnRoulette
}
