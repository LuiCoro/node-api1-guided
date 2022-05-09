const express = require('express'); // "CommonJS"
const Dog = require('./dog-model');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    console.log('I received a request!');
    res.send("<h1>Hello world!</h1><p>Here is a paragraph</p>");
});


// [GET]    /api/dogs     (R of CRUD, fetch all dogs)
server.get('/api/dogs', (req, res) => {
    Dog.findAll()
        .then(result => {
            res.json(result);
        });
});

// [GET]    /api/dogs/:id (R of CRUD, fetch dog by :id)
server.get('/api/dogs/:id', (req, res) => {
    const id = req.params.id;
    Dog.findById(id)
        .then(result => {
            res.json(result);
        });
});

// [POST]   /api/dogs     (C of CRUD, create new dog from JSON payload)
server.post('/api/dogs', (req, res) => {
    Dog.create(req.body)
        .then(result => {
            res.json(result);
        })
});

// [PUT]    /api/dogs/:id (U of CRUD, update dog with :id using JSON payload)
server.put('/api/dogs/:id', (req, res) => {
    Dog.update(req.params.id, req.body)
    .then(result => {
        res.json(result);
    })
});

// [DELETE] /api/dogs/:id (D of CRUD, remove dog with :id)
server.delete('/api/dogs/:id', (req, res) => {
    res.end();
});


module.exports = server;
