const config = require('../config/config.json')[process.env.NODE_ENV || 'development']
const request = require('request')

module.exports = {
  validate (req, res, next) {
    const verifyUrl = `https://google.com/recaptcha/api/siteverify?secret=${config.recaptchaSecretkey}&response=${req.body.recaptchaToken}&remoteip=${req.connection.remoteAddress}`
    request(verifyUrl, (error, response, body) => {
      if (error) {
        res.status(400).send({
          error: error
        })
        return
      }
      if (JSON.parse(body).success) {
        console.log('success')
        next()
      }
    })
  }
}
