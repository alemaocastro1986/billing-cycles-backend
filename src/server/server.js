const express = require('express');
const bodyParser = require('body-parser')
const allowCors  = require('../config/cors')
const queryParser = require('express-query-int')

const enviroment = require('../config/enviroments');
const server = express()

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)
server.use(queryParser())

server.listen(enviroment.server.port, ()=>{
   console.log(`BACKEND is running on port ${enviroment.server.port}.`);
})


module.exports = server
