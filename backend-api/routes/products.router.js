const express = require('express');



const ProductsService = require('../services/product.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createProductSchema, updateProductSchema, getProductSchema} = require('./../schemas/product.schema');


const router = express.Router();
const service = new ProductsService ();


router.get('/', async (req, res, next)=>{
    try{
        const products = await service.find();
        res.json(products)
    }catch(error){
        next(error)
    }
    
});
router.get('/:idProducts', validatorHandler(getProductSchema, 'params'),
    async (req, res, next)=>{
        try {
            const { idProducts } = req.params;   
            const products = await service.findOne(idProducts);
            res.json(products)
        } catch (error) {
            next(error)
        }   
})

router.post('/', 
    validatorHandler(createProductSchema, 'body'),
    async (req, res)=>{
        const body = req.body;
        const newProduct = await service.create(body)
        res.status(201).json(newProduct);
})

router.patch('/:idProducts', 
    validatorHandler(getProductSchema, 'params'),
    validatorHandler(updateProductSchema, 'body'),
    async (req, res, next)=>{
        try {
            const { idProducts } = req.params;
            const body = req.body;
            const product = await service.update(idProducts, body);
            res.json(product)
        } catch (error) {
            next(error)
    }   
})
router.delete('/:idProducts', validatorHandler(getProductSchema, 'params'),
    async (req, res, next)=>{
        try {
            const { idProducts } = req.params;
        
            const products = await service.delete(idProducts);
            res.json(products)
        } catch (error) {
            next(error)
        }   
})
module.exports = router;