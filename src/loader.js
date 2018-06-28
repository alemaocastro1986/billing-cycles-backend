const server = require('./server/server')
require('./db/database')
require('./routes/routes')(server)