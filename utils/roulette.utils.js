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

async function getAllRoulettes () {

}

async function changeStatusRoulette ({ idroulette, statusNew }) {
  // actualizar de acuerdo al estado
}

module.exports = {
  getRouletteStatus,
  findRouletteById,
  saveRoulette,
  getAllRoulettes,
  changeStatusRoulette
}
