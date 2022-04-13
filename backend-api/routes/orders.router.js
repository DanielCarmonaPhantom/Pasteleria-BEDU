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
router.get('/:id', validatorHandler(getOrderSchema, 'params'),
    async (req, res, next)=>{
        try {
            const { id } = req.params;        
            const orders = await service.findOne(id);
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

router.patch('/:id', 
    validatorHandler(getOrderSchema, 'params'),
    validatorHandler(updateOrderSchema, 'body'),
    async (req, res, next)=>{
        try {
            const { id} = req.params;
            const body = req.body;
            const product = await service.update(id, body);
            res.json(product)
        } catch (error) {
            next(error)
    }   
})
router.delete('/:id', validatorHandler(getOrderSchema, 'params'),
    async (req, res, next)=>{
        try {
            const { id } = req.params;
        
            const orders = await service.delete(id);
            res.json(orders)
        } catch (error) {
            next(error)
        }   
})
module.exports = router;