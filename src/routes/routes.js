const express = require('express')

module.exports  = (server)=>{
   //definir url base para todas as rotas
   const router = express.Router()
   server.use('/api', router)

   //rotas de Ciclo de pagamento
   const billingCycle = require('../api/billingCycle/billingCycleService')
   billingCycle.register(router, '/billingCycles')
}