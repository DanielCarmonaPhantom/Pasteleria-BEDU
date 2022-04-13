const Joi = require('joi');

const id = Joi.number();
const name = Joi.string().min(3).max(45)
const category = Joi.string();
const price = Joi.number().min(7);
const image = Joi.string()

const createProductSchema = Joi.object({
    id: id,
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
    id: id.required(),
})

module.exports = { createProductSchema, updateProductSchema, getProductSchema }