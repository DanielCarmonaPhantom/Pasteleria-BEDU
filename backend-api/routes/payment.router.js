const express = require('express');

const PaymentsService = require('../services/payment.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createPaymentSchema, updatePaymentSchema, getPaymentSchema} = require('./../schemas/payment.schema');


const router = express.Router();
const service = new PaymentsService ();


router.get('/', async (req, res, next)=>{
    try{
        const payments = await service.find();
        res.json(payments)
    }catch(error){
        next(error)
    }
    
});
router.get('/:idPayments', validatorHandler(getPaymentSchema, 'params'),
    async (req, res, next)=>{
        try {
            const { idPayments } = req.params;        
            const payments = await service.findOne(idPayments);
            res.json(payments)
        } catch (error) {
            next(error)
        }   
})

router.post('/', 
    validatorHandler(createPaymentSchema, 'body'),
    async (req, res)=>{
        const body = req.body;
        const newPayment = await service.create(body)
        res.status(201).json(newPayment);
})

router.patch('/:idPayments', 
    validatorHandler(getPaymentSchema, 'params'),
    validatorHandler(updatePaymentSchema, 'body'),
    async (req, res, next)=>{
        try {
            const { idPayments } = req.params;
            const body = req.body;
            const payment = await service.update(idPayments, body);
            res.json(payment)
        } catch (error) {
            next(error)
    }   
})
router.delete('/:idPayments', validatorHandler(getPaymentSchema, 'params'),
    async (req, res, next)=>{
        try {
            const { idPayments } = req.params;
        
            const payments = await service.delete(idPayments);
            res.json(payments)
        } catch (error) {
            next(error)
        }   
})
module.exports = router;