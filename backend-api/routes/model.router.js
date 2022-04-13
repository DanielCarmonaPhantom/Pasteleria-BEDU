const express = require('express');
const { spawn } = require('child_process')


const ProductsService = require('../services/product.service');

const router = express.Router();
const service = new ProductsService ();


router.get('/:idProducts',
    async (req, res, next)=>{

        const childPython = spawn ('/bin/python3',['/home/daniel/Desktop/Pasteleria/backend-api/ml/modelo.scripts.py']);

        const { idProducts } = req.params;

        
        var product_predict = ""


        childPython.stdout.on("data", function (data) {
            product_predict += data.toString()
            
        })

        childPython.stdout.on("end",async function () {  
            
            const products = await service.findOne(product_predict);
            res.json(products)
        })

        childPython.stdin.write(idProducts)
        childPython.stdin.end()



        try {
            
        } catch (error) {
            next(error)
        }
})


module.exports = router;