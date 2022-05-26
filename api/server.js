// IMPORTS AT THE TOP
const express = require('express')

// This imports all the exported functions from dog-model.js
const Dog = require('./dog-model')

// INSTANCE OF EXPRESS APP
const server = express()

// GLOBAL MIDDLEWARE
server.use(express.json())

// ENDPOINTS
server.get('/', (req, res) => {
  res.json({message: 'Hello from the server!'})
})

// now a GET request using async/await
server.get('/api/dogs', async (req, res) => {
  try {
    // Pulls all dogs from the database
    const dogs = await Dog.findAll()

    // Want to see the error message uncomment the next line
    throw new Error('foo')

    // Sends back the dogs to the client as a response
    res.json(dogs)
  } catch (err) {
    // If there is an error, send back a 500 status code
    res.status(500)
    .json({
      // Sends back an error message along with the actual error
      message: 'An error occured!',
      error: err.message,
    })
  }
})

// [GET]    /api/dogs     (R of CRUD, fetch all dogs)
// [GET]    /api/dogs/:id (R of CRUD, fetch dog by :id)
// [POST]   /api/dogs     (C of CRUD, create new dog from JSON payload)
// [PUT]    /api/dogs/:id (U of CRUD, update dog with :id using JSON payload)
// [DELETE] /api/dogs/:id (D of CRUD, remove dog with :id)

// EXPOSING THE SERVER TO OTHER MODULES
module.exports = server