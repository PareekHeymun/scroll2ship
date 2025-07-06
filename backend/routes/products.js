const express = require('express');
const router = express.Router();
const Product = require('../models/product.model');

const getAllProducts = async(req, res) =>{
    const products = await Product.find();
    res.json(products);
}

const getSpecificProduct = async(req, res) => {
    const product = await Product.findById(req.params.id);
    if(!product) return res.status(400).json({msg: 'Product not found'});
    res.json(product);
}

const uploadTheProduct = async(req, res) =>{
    //check for duplicate products also
    console.log(req.body);

    try{
        await new Product(req.body).save();
        res.status(200).send('Product Saved Successfully');
    }catch(err){
        res.status(400).send('Error uploading product');
    }
}
router.get('/', getAllProducts);
router.get('/:id', getSpecificProduct);
router.post('/uploadProduct', uploadTheProduct);

module.exports = router;

