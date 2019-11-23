//Imports for all necessary modules to use
//in our app
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
//We have no use for jwt yet
//const jwt = require('jsonwebtoken')

//import individual routers/controllers
const accountsController = require('./controllers/accountController')
const coursesController = require('./controllers/accountController')
const notesController = require('./controllers/notesController')

//import custom middleware
const middleware = require('./utils/middleware')

//application specific imports
const config = require('./utils/config')

//call main express app
const express = require('express')
const app = express()

//configure middlewares
app.use(cors())
app.use(express.static('build'))
app.use(bodyParser.json())
app.use(morgan(':method :url :status :res[content - length] - :response-time ms'))


//Connect mongodb
mongoose
    .connect(config.MONGODB_URI, { useNewUrlParser: true })
    .then(() => console.log("Connected successfully"))
    .catch(error => console.log("I could not connect to my server because of ", error))

//connect routes
app.use(`${config.BASE_URL}/notes`, notesController)
app.use(`${config.BASE_URL}/accounts`, accountsController)
app.use(`${config.BASE_URL}/courses`, coursesController)

//registering middleware for unknown routes
app.use(middleware.unKnownRouteHandler)
//registering error handler
app.use(middleware.errorHandler)

module.exports = app
