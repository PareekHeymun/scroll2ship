const express = require('express');
const router = express.Router();
const Cart = require('../models/cart.model');
const auth = require('../middleware/auth.middleware');

router.get('/', auth, async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user.id }).populate('product.productId');
  res.json(cart || { products: [], total: 0 });
});

router.post('/add', auth, async (req, res) => {
  const { productId, quantity } = req.body;
  let cart = await Cart.findOne({ userId: req.user.id });
  if (!cart) cart = new Cart({ userId: req.user.id, products: [] });
  cart.product.push({ productId, quantity });
  await cart.save();
  res.status(201).json(cart);
});

module.exports = router;
