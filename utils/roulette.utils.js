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

async function findRouletteById (idroulette = null) {
  // Hacer consulta por id
}

async function saveRoulette (roulette) {
  // guardar ruleta
}

module.exports = {
  getRouletteStatus,
  findRouletteById,
  saveRoulette
}
