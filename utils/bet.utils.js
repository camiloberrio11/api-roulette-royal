'use strict'

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

module.exports = {
  isValidBet
}
