const express = require('express');

const OrderService = require('./../services/order.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { createOrderSchema, updateOrderSchema, getOrderSchema } = require('./../schemas/order.schema');


const router = express.Router();
const service = new OrderService ();

router.get('/', async (req, res, next)=>{
    
    try{        
        const orders = await service.find();
        res.json(orders)
    }catch(error){
        next(error)
    }
    
});


router.get('/:idOrder', async (req, res)=>{
    const { idOrder } = req.params;
    
    const orders = await service.findOne(idOrder);
    res.json(orders)
    
})

router.post('/', async (req, res)=>{
    const body = req.body;
    const newOrder= await service.create(body)
    res.status(201).json(newOrder);
})

module.exports = router;