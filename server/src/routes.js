const AuthController = require('./controllers/AuthController')
const AuthControllerPolicy = require('./policies/AuthControllerPolicy')
// const reCaptchaPolicy = require('./policies/RecaptchaPolicy')

const UsersController = require('./controllers/UsersController')
module.exports = (app) => {
  // app.post('/register', reCaptchaPolicy.validate, AuthControllerPolicy.register, AuthController.register)
  // app.post('/login', reCaptchaPolicy.validate, AuthController.login)

  app.post('/register', AuthControllerPolicy.register, AuthController.register)
  app.post('/login', AuthController.login)
  app.get('/users', UsersController.index)
}
