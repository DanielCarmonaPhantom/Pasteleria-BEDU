const Joi = require('joi');

const idProducts = Joi.number();
const name = Joi.string().min(3).max(45)
const category = Joi.string();
const price = Joi.number().min(7);
const image = Joi.string()

const createProductSchema = Joi.object({
    name: name.required(),
    category: category.required(),
    price: price.required(),
    image: image
})

const updateProductSchema = Joi.object({
    name: name,
    category: category,
    price: price,
    image: image

})

const getProductSchema = Joi.object({
    idProducts: idProducts.required(),
})

module.exports = { createProductSchema, updateProductSchema, getProductSchema }