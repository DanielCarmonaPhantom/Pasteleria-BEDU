const Joi = require('joi');

const idPayment = Joi.number();
const idCustomer = Joi.number();
const total = Joi.number();

const createPaymentSchema = Joi.object({
    idPayment: idPayment,
    idCustomer: idCustomer,
    total: total
})

const updatePaymentSchema = Joi.object({
    idPayment: idPayment,
    idCustomer: idCustomer,
    total: total

})

const getPaymentSchema = Joi.object({
    idPayment: idPayment.required(),
})

module.exports = { createPaymentSchema, updatePaymentSchema, getPaymentSchema }