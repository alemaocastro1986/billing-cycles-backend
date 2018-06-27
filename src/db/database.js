const mongoose = require('mongoose');
const environment  =require('../config/enviroments')
mongoose.Promise = global.Promise

module.exports = mongoose.connect(environment.db.url)