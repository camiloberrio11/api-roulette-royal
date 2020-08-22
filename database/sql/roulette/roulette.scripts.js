'use strict'

const scriptfindAllRoulettes = () => {
  return `SELECT status, date_created, idroulette
  FROM roulette`
}
const scriptUpdateStatusRoulette = ({ idroulette, statusNew }) => {
  return `UPDATE roulette
  SET status = ${Boolean(statusNew)}
  WHERE idroulette = ${+idroulette};`
}

const scriptFindRouletteById = (id) => {
  return `SELECT status, date_created, idroulette
  FROM roulette
  WHERE idroulette = ${id}`
}

const scriptCreateRoulette = (roulette) => {
  const { idRoulette } = roulette
  return `INSERT INTO roulette(idroulette, status)
  VALUES (${+idRoulette}, false);
  `
}

const scriptGetStatusRoulette = (idroulette) => {
  return `SELECT status
  FROM roulette
  WHERE idroulette = ${+idroulette};
  `
}
module.exports = {
  scriptfindAllRoulettes,
  scriptUpdateStatusRoulette,
  scriptFindRouletteById,
  scriptCreateRoulette,
  scriptGetStatusRoulette
}
