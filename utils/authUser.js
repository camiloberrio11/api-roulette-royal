'use strict'

const { serviceResponse } = require('../utils/general')
const validateUserInHeader = (req, res, next) => {
  try {
    const { userid } = req.headers
    if (userid) {
      return next()
    }
    return serviceResponse(401, null, 'does not have a user id to make this request', false, res)
  } catch (error) {
    const { message } = error
    return serviceResponse(500, null, message, false, res)
  }
}
module.exports = {
  validateUserInHeader
}