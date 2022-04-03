'use strict';

const { ProductSchema, PRODUCT_TABLES } = require('./../models/product.model')
const { OrderSchema, ORDER_TABLES,  } = require('./../models/order.model')

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(PRODUCT_TABLES, ProductSchema);
    await queryInterface.createTable(ORDER_TABLES, OrderSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.drop(PRODUCT_TABLES);
    await queryInterface.drop(ORDER_TABLES);
  }
};
