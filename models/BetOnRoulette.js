'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const betOnRoulette = new Schema({
  idbet: {
    type: Number,
    required: true
  },
  isRed: {
    type: Boolean,
    required: true
  },
  isBlack: {
    type: Boolean,
    required: true
  },
  betNumber: {
    type: Number
  },
  money: {
    type: Number,
    max: 10000,
    required: true
  },
  idroulette: {
    type: Number,
    required: true
  },
  date_created: {
    required: true,
    type: String
  },
  userid: {
    required: true,
    type: String
  }
})
module.exports = mongoose.model('BetOnRoulette', betOnRoulette)
