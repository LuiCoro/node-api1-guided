// import the server and start it!
const express = require('express')
const server = express()

server.get('/hello', (req, res) => {
  res.json({message: 'Hello!'})
})

server.listen(9000, () => {
  console.log('\n*** Server is running on port 9000 ***\n')
} )