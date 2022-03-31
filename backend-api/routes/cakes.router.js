const express = require('express');

const CakesService = require('./../services/cake.service');

const routerApi = require('.');

const router = express.Router();
const service = new CakesService ();


router.get('/', async (req, res)=>{
    try{
        const cakes = await service.find();
        res.json(cakes)
    }catch(error){
        next(error)
    }
    
});

module.exports = router;