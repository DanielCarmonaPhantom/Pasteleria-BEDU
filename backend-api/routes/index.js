const express = require('express');

const cakesRouter = require('./cakes.router');
const complemnetsRouter = require('./complements.router');
const ordersRouter = require('./orders.router')


function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/cakes', cakesRouter);
    router.use('/complements', complemnetsRouter);
    router.use('/orders', ordersRouter);
}

module.exports = routerApi;