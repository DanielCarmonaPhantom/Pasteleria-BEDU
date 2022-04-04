const {  Order, OrderSchema } = require('./order.model');
const { Product, ProductSchema  } = require('./product.model')
const { Customer, CustomerSchema  } = require('./customer.model')

function septupModels(sequelize) {
    Order.init(OrderSchema, Order.config(sequelize));
    Product.init(ProductSchema, Product.config(sequelize))
    Customer.init(CustomerSchema, Customer.config(sequelize));

    Order.associate(sequelize.models)
    Customer.associate(sequelize.models);
}


module.exports = septupModels;