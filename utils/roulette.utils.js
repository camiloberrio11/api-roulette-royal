'use strict'
// validar estado de la ruleta
async function getRouletteStatus ({ idRoulette }) {
  try {
    const status = true
    return status
  } catch (error) {
    return false
  }
}

module.exports = {
  getRouletteStatus
}
