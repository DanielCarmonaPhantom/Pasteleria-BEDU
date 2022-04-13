'use strict';

const { OrderSchema, ORDER_TABLES } = require('./../models/order.model')


module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(ORDER_TABLES, OrderSchema);

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.drop(ORDER_TABLES);

  }
};
