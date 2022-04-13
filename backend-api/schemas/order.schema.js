const Joi = require('joi');

const id = Joi.number();
const customerId = Joi.number();
const productId = Joi.number();
const amount = Joi.number();
const size = Joi.number();
const price = Joi.number();


const createOrderSchema = Joi.object({
    id: id,
    customerId: customerId.required(),
    productId: productId.required(),
    amount: amount,
    size: size,
    price: price,
})

const updateOrderSchema = Joi.object({
    id: id.required(),
    customerId: customerId,
    productId: productId,
    amount: amount,
    size: size,
    price: price,
})

const getOrderSchema = Joi.object({
    id: id.required(),
})

module.exports = { createOrderSchema, updateOrderSchema, getOrderSchema }