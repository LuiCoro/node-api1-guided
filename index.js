const express = require("express"); // "CommonJS"

const server = express();

server.listen(9000, () => {
    console.log('server is now running');
});