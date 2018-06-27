const restful  =require('node-restful');
const mongoose = require('mongoose');

const creditSchema = new mongoose.Schema({
   name:{
      type:String,
      required:true,
      uppercase: true
   },
   value:{
      type:Number,
      min:0,
      required: true
   }
})

const debtSchema = new mongoose.Schema({
   name:{
      type:String,
      required:true,
      uppercase: true
   },
   value:{
      type:Number,
      min:0,
      required:true
   },
   status:{
      type:String,
      required:true,
      uppercase:true,
      enum:[
         'PAGO', 'PENDENTE', 'AGENDADO'
      ]
   }

})

const billingCycleSchema = new mongoose.Schema({
   name:{
      type: String,
      required:true,
      uppercase:true
   },
   month:{
      type:Number,
      min:1,
      max:12,
      required: true
   },
   year:{
      type:Number,
      min:2000,
      max:2100,
      required:true
   },
   credits:[ creditSchema],
   debts:[debtSchema]
})

module.exports = restful.model('BillingCycle',billingCycleSchema)