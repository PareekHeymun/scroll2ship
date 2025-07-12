const Cart = require('../models/cart.model');
const { ApiError } = require('../utils/ApiError.util');
const { asyncHandler } = require('../utils/asyncHandler.util');

const findUserCart = asyncHandler(async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user.id }).populate('product.productId');
  if (!cart) throw new ApiError(404, 'Cart not found');
  res.status(200).json({msg: 'Cart fetched successfully', cart});
});

const addToCart = asyncHandler(async (req, res) => {
  const { productId, quantity } = req.body;
  let cart = await Cart.findOne({ userId: req.user.id });
  if (!cart) cart = new Cart({ userId: req.user.id, products: [] });
  cart.product.push({ productId, quantity });
  await cart.save();
  res.status(201).json({msg: 'Product added to cart successfully', cart});
});

module.exports = {findUserCart, addToCart};
