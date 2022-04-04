'use strict';

const { CustomerSchema, CUSTOMER_TABLES } = require('./../models/customer.model')


module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(CUSTOMER_TABLES, CustomerSchema);

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.drop(CUSTOMER_TABLES);

  }
};
