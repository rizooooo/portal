const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config/config.json')[process.env.NODE_ENV || 'development']
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./passport')

require('./routes')(app)

sequelize.sync({force: false})
  .then(() => {
    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)
  })