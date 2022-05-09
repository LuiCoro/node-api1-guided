const express = require("express"); // "CommonJS"

const server = express();

// GLOBAL MIDDLEWARE


function getSomeData() {
    return [
        1, 2, 3, 4, 5, 6, 7, 8
    ];
}

server.get('/', (req, res) => {
    console.log('I received a request!');
    res.send("<h1>Hello world!</h1><p>Here is a paragraph</p>");
});

// [GET]    /             (Hello World endpoint)
// [GET]    /api/dogs     (R of CRUD, fetch all dogs)
// [GET]    /api/dogs/:id (R of CRUD, fetch dog by :id)
// [POST]   /api/dogs     (C of CRUD, create new dog from JSON payload)
// [PUT]    /api/dogs/:id (U of CRUD, update dog with :id using JSON payload)
// [DELETE] /api/dogs/:id (D of CRUD, remove dog with :id)

module.exports = server;
