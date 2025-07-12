const Product = require('../models/product.model');
const { ApiError } = require('../utils/ApiError.util');
const { asyncHandler } = require('../utils/asyncHandler.util');

const getAllProducts = asyncHandler(async(req, res) =>{
    const products = await Product.find();
    res.status(200).json({msg: 'Products fetched successfully', products});
});

const getSpecificProduct = asyncHandler(async(req, res) => {
    const product = await Product.findById(req.params.id);
    if(!product) throw new ApiError(404, 'Product not found');
    res.status(200).json({msg: 'Product fetched successfully', product});
});

const uploadTheProduct = asyncHandler(async(req, res) =>{
    const product = new Product(req.body);
    await product.save();
    res.status(201).json({msg: 'Product uploaded successfully'});
});

module.exports = {getAllProducts, getSpecificProduct, uploadTheProduct};