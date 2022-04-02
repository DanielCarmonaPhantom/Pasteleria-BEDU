const express = require('express');

const ComplementsService = require('./../services/complement.service');


const router = express.Router();
const service = new ComplementsService ();


router.get('/:id', async (req, res)=>{
    const { id } = req.params;
    
    const complements = await service.findOne(id);
    res.json(complements)
    
})

router.post('/', async (req, res)=>{
    const body = req.body;
    const newComplement= await service.create(body)
    res.status(201).json(newComplements);
})

module.exports = router;