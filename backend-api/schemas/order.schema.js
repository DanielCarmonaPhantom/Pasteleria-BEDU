const Joi = require('joi');

const idOrders = Joi.number()

const date = Joi.date();
const idStore = Joi.number();
const idClients = Joi.number();
const idEmployee = Joi.number();
const orderCake = Joi.object();
const orderComplement = Joi.object();

const createOrderSchema = Joi.object({
    date : date.required(),
    idStore : idStore.required(),
    idClients: idClients.required(),
    idEmployee: idEmployee.required(),
    orderCake: orderCake.required(),
    orderComplement: orderComplement,
})

const updateOrderSchema = Joi.object({
    date : date,
    idStore : idStore,
    idClients: idClients,
    idEmployee: idEmployee,
    orderCake: orderCake,
    orderComplement: orderComplement,
})

const getOrderSchema = Joi.object({
    idOrders: idOrders.required(),
})

module.exports = { createOrderSchema, updateOrderSchema, getOrderSchema }