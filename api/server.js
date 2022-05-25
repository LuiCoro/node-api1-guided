// IMPORTS AT THE TOP
const express = require('express')

// This imports all the exported functions from dog-model.js
const Dog = require('./dog-model')

// INSTANCE OF EXPRESS APP
const server = express()

// GLOBAL MIDDLEWARE
server.use(express.json())

// ENDPOINTS
server.get('/hello', (req, res) => {
  res.json({message: 'Hello!'})
})


server.get('/api/dogs' , (req, res) => {

  // Pulls all dogs from the database
  Dog.findAll()
  
  // Because its a promise we have to use .then() & .catch()
  .then(dogs => {
    //  We use the dogs as an argument to send the dogs back to the client
    // use throw new Error('foo') to test the catch block
    // new Error('foo')
    res.json(dogs)
  })
  .catch(err => {
    res.status(500)
    .json({ 
      message: 'Something bad occured!'
      error: err.message,
    })
  })
  
})

// [GET]    /api/dogs     (R of CRUD, fetch all dogs)
// [GET]    /api/dogs/:id (R of CRUD, fetch dog by :id)
// [POST]   /api/dogs     (C of CRUD, create new dog from JSON payload)
// [PUT]    /api/dogs/:id (U of CRUD, update dog with :id using JSON payload)
// [DELETE] /api/dogs/:id (D of CRUD, remove dog with :id)

// EXPOSING THE SERVER TO OTHER MODULES
module.exports = server