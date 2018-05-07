const {User} = require('../models')
module.exports = {
  async index (req, res) {
    try {
      const users = await User.findAll()
      res.send({
        users: users
      })
    } catch (err) {
      res.status(400).send({
        error: err
      })
    }
  }
}
