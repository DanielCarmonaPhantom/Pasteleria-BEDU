const Joi = require('joi');

const id = Joi.number();
const name = Joi.string();
const street = Joi.string();
const num1 = Joi.number();
const num2 = Joi.number();
const suburb = Joi.string();
const city = Joi.string();
const state = Joi.string();
const zipcode = Joi.string();


const createCustomerSchema = Joi.object({
    id : id,
    name: name,
    street: street,
    num1: num1,
    num2: num2,
    suburb: suburb,
    city: city,
    state: state,
    zipcode: zipcode
})

const updateCustomerSchema = Joi.object({
    id: id.required(),
    name: name,
    street: street,
    num1: num1,
    num2: num2,
    suburb: suburb,
    city: city,
    state: state,
    zipcode: zipcode
})

const getCustomerSchema = Joi.object({
    id: id.required(),
})

module.exports = { createCustomerSchema, updateCustomerSchema, getCustomerSchema}