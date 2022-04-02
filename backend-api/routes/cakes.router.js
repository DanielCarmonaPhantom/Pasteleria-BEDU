const express = require('express');

const CakesService = require('./../services/cake.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { createProductSchema, updateProductSchema, getProductSchema} = require('./../schemas/cake.schema');


const router = express.Router();
const service = new CakesService ();


router.get('/', async (req, res, next)=>{
    try{
        const cakes = await service.find();
        res.json(cakes)
    }catch(error){
        next(error)
    }
    
});
router.get('/:id', validatorHandler(getProductSchema, 'params'),
    async (req, res, next)=>{
        try {
            const { id } = req.params;
        
            const cakes = await service.findOne(id);
            res.json(cakes)
        } catch (error) {
            next(error)
        }   
})

router.post('/', 
    validatorHandler(createProductSchema, 'body'),
    async (req, res)=>{
        const body = req.body;
        const newCake = await service.create(body)
        res.status(201).json(newCake);
})

router.patch('/:id', 
    validatorHandler(getProductSchema, 'params'),
    validatorHandler(updateProductSchema, 'body'),
    async (req, res, next)=>{
        try {
            const { id } = req.params;
            const body = req.body;
            const cakes = await service.update(id, body);
            res.json(cakes)
        } catch (error) {
            next(error)
        }   
})

module.exports = router;