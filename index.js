const server = require('./api/server');

server.listen(9000, () => {
    console.log('server is now running on port 9000');
});
