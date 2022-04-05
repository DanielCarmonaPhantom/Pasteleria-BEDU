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
router.get('/:idOrders', validatorHandler(getOrderSchema, 'params'),
    async (req, res, next)=>{
        try {
            const { idOrders } = req.params;        
            const orders = await service.findOne(idOrders);
            res.json(orders)
        } catch (error) {
            next(error)
        }   
})

router.post('/', 
    // validatorHandler(createOrderSchema, 'body'),
    async (req, res)=>{
        const body = req.body;
        const newOrder = await service.create(body)
        res.status(201).json(newOrder);
})

router.patch('/:idOrders', 
    validatorHandler(getOrderSchema, 'params'),
    validatorHandler(updateOrderSchema, 'body'),
    async (req, res, next)=>{
        try {
            const { idOrders } = req.params;
            const body = req.body;
            const product = await service.update(idOrders, body);
            res.json(product)
        } catch (error) {
            next(error)
    }   
})
router.delete('/:idOrders', validatorHandler(getOrderSchema, 'params'),
    async (req, res, next)=>{
        try {
            const { idOrders } = req.params;
        
            const orders = await service.delete(idOrders);
            res.json(orders)
        } catch (error) {
            next(error)
        }   
})
module.exports = router;