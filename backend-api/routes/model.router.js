const express = require('express');
const { spawn } = require('child_process')


const ProductsService = require('../services/product.service');

const router = express.Router();
const service = new ProductsService ();




const childPython = spawn ('/bin/python3',['/home/daniel/Desktop/Pasteleria/backend-api/ml/modelo.scripts.py']);



router.get('/:idProducts',
    async (req, res, next)=>{

        const { idProducts } = req.params;

        var product_predict = ""


        childPython.stdout.on("data", function (data) {
            product_predict += data.toString()
            
        })

        childPython.stdout.on("end",function () {  
            console.log(product_predict)  
        })

        childPython.stdin.write(idProducts)
        childPython.stdin.end()



        try {
            const products = await service.findOne(4);
            res.json(products)
        } catch (error) {
            next(error)
        }
})


module.exports = router;