const express = require('express');

const cakesRouter = require('./cakes.router');

function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/cakes', cakesRouter);
}

module.exports = routerApi;