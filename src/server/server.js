const express = require('express');
const bodyParser = require('body-parser')

const enviroment = require('../config/enviroments');
const server = express()

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.listen(enviroment.server.port, ()=>{
   console.log(`BACKEND is running on port ${enviroment.server.port}.`);
})


module.exports = server
