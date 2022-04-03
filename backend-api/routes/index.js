const express = require('express');

const productsRouter = require('./products.router');
const ordersRouter = require('./orders.router')
const customersRouter = require('./customer.router')

function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/products', productsRouter);
    router.use('/orders', ordersRouter);
    router.use('/customers', customersRouter);
}

module.exports = routerApi;