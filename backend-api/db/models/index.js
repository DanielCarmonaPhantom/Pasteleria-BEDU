const {  Order, OrderSchema } = require('./order.model');
const { Product, ProductSchema  } = require('./product.model')
const { Customer, CustomerSchema  } = require('./customers.model')

function septupModels(sequelize) {
    Order.init(OrderSchema, Order.config(sequelize));
    Product.init(ProductSchema, Product.config(sequelize))
    Customer.init(CustomerSchema, Customer.config(sequelize))
}


module.exports = septupModels;