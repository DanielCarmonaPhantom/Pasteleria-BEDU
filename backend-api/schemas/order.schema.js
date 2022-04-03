const Joi = require('joi');

const idOrders = Joi.number();
const idPayment = Joi.number();
const idProduct = Joi.number();
const amount = Joi.number();
const size = Joi.number();
const price = Joi.number();


const createOrderSchema = Joi.object({
    idPayment: idPayment,
    idProduct: idProduct,
    amount: amount,
    size: size,
    price: price,
})

const updateOrderSchema = Joi.object({
    idPayment: idPayment,
    idProduct: idProduct,
    amount: amount,
    size: size,
    price: price,
})

const getOrderSchema = Joi.object({
    idOrders: idOrders.required(),
})

module.exports = { createOrderSchema, updateOrderSchema, getOrderSchema }