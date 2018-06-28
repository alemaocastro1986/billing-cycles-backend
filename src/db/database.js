const mongoose = require('mongoose');
const environment  =require('../config/enviroments')
mongoose.Promise = global.Promise

module.exports = mongoose.connect(environment.db.url)

//translate errors

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O {VALUE} informado é menor que o limite mínino '{MIN}'."
mongoose.Error.messages.Number.max = "O {VALUE} informado é maior que o limite máximo '{MAX}'."
mongoose.Error.messages.String.enum = "'{VALUE}' não é válido para o atributo '{PATH}'"