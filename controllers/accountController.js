const accountsController = require('express').Router()
//import service for this controller.
//The service will help abstract controller tasks
//We will ensure that a controller's tasks is to delegate to 
//service and return a response
//Service functionality is located at '../services/accountService'
//const accountService = require('../services/accountService')


accountsController.get('/', (req, res) => {
    res.send('<p>You just hit the account page</p>')
})

module.exports = accountsController