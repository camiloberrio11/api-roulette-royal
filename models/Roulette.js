'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const roulette = new Schema({
  idroulette: {
    type: Number,
    unique: true,
    required: true
  },
  status: {
    type: Boolean,
    required: true
  },
  date_created: {
    required: true,
    type: String
  }
})
module.exports = mongoose.model('Roulette', roulette)
