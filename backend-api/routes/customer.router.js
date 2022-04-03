const express = require('express');

const CustomerService = require('./../services/customer.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { createCustomerSchema, updateCustomerSchema, getCustomerSchema} = require('./../schemas/customer.schema');


const router = express.Router();
const service = new CustomerService ();

router.get('/', async (req, res, next)=>{
    try{
        const customers = await service.find();
        res.json(customers)
    }catch(error){
        next(error)
    }
    
});
router.get('/:idCustomer', validatorHandler(getCustomerSchema, 'params'),
    async (req, res, next)=>{
        try {
            const { idCustomer } = req.params;        
            const customers = await service.findOne(idCustomer);
            res.json(customers)
        } catch (error) {
            next(error)
        }   
})

router.post('/', 
    validatorHandler(createCustomerSchema, 'body'),
    async (req, res)=>{
        const body = req.body;
        const newCostumer = await service.create(body)
        res.status(201).json(newCostumer);
})

router.patch('/:idCustomer', 
    validatorHandler(getCustomerSchema, 'params'),
    validatorHandler(updateCustomerSchema, 'body'),
    async (req, res, next)=>{
        try {
            const { idCustomer } = req.params;
            const body = req.body;
            const customer = await service.update(idCustomer, body);
            res.json(customer)
        } catch (error) {
            next(error)
    }   
})
router.delete('/:idCustomer', validatorHandler(getCustomerSchema, 'params'),
    async (req, res, next)=>{
        try {
            const { idCustomer } = req.params;
        
            const customer = await service.delete(idCustomer);
            res.json(customer)
        } catch (error) {
            next(error)
        }   
})
module.exports = router;