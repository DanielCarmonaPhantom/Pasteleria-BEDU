const Joi = require('joi');

const id = Joi.string().uuid();

const name = Joi.string().min(3).max(45)
const price = Joi.number().min(7);
const img = Joi.string().uri()

const createProductSchema = Joi.object({
    name: name.required(),
    price: price.required(),
    img: img
})

const updateProductSchema = Joi.object({
    name: name,
    price: price,
    img: img
})

const getProductSchema = Joi.object({
    id: id.required(),
})

module.exports = { createProductSchema, updateProductSchema, getProductSchema }