const express = require('express');

const modelo = require('./../../ml/modelo/file_pkl_model.pkl')

const router = express.Router();
const service = new ProductsService ();

router.post('/', async (req, res)=>{
        const body = req.body;
        const newProduct = await service.create(body)
        res.status(201).json(newProduct);
})

module.exports = router;