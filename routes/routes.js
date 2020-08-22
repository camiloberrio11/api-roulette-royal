'use strict'
const { Router } = require('express')
const { createRoulette, openRoulette, closeRoulette, roulettesList } = require('../controllers/roulette.controller')
const { betOnRoulette } = require('../controllers/bet.controller')
const { validateUserInHeader } = require('../utils/authUser')
const routes = Router()

routes.post('/addroulette', createRoulette)
routes.put('/openroulette/:idroulette', openRoulette)
routes.put('/closeroulette/:idroulette', closeRoulette)
routes.get('/roulettes', roulettesList)
routes.post('/betroulette', validateUserInHeader, betOnRoulette)

module.exports = routes
