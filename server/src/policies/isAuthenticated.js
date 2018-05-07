const passport = require('passport')

module.exports = function (req, res, next) {
  passport.authenticate('jwt', function (err, user) {
    if (err) {
      res.status(403).send({
        error: 'You do not have access'
      })
    } else {
      req.user = user
      next()
    }
  })
}
