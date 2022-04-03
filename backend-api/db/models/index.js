const {  Order, OrderSchema } = require('./order.model');
const { Product, ProductSchema  } = require('./product.model')

function septupModels(sequelize) {
    Order.init(OrderSchema, Order.config(sequelize));
    Product.init(ProductSchema, Product.config(sequelize))
}


module.exports = septupModels;