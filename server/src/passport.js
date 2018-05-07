const passport = require('passport')
const {User} = require('./models')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const config = require('./config/config.json')[process.env.NODE_ENV || 'development']

passport.use(
  new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.authentication.jwtSecret
  }, async function (jwtPayload, done) {
    try {
      const user = await User.findOne({
        where: {
          id: jwtPayload.id
        }
      })
      if (!user) {
        return (new Error(), false)
      }
      return (null, user)
    } catch (err) {
      return done(new Error(), false)
    }
  }

  )
)

module.exports = null
