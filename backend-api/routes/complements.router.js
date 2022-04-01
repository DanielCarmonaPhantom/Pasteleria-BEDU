const express = require('express');

const ComplementsService = require('./../services/complement.service');


const router = express.Router();
const service = new ComplementsService ();


router.get('/', async (req, res)=>{
    try{
        const complements = await service.find();
        res.json(complements)
    }catch(error){
        next(error)
    }
    
});

module.exports = router;