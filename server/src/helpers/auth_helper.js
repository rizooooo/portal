const jwt = require('jsonwebtoken')
const config = require('../config/config.json')[process.env.NODE_ENV || 'development']

exports.jwtSignUser = function (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}
