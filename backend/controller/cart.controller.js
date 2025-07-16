const { ApiError } = require('../utils/ApiError.util');
const { asyncHandler } = require('../utils/asyncHandler.util');
const { 
  getUserCart, 
  addToCart, 
  removeFromCart, 
  updateCartQuantity,
  calculateCartTotal 
} = require('../utils/cartUtils');

const findUserCart = asyncHandler(async (req, res) => {
  const cart = await getUserCart(req.user.id);
  const total = calculateCartTotal(cart);
  res.status(200).json({
    msg: 'Cart fetched successfully', 
    cart: { ...cart.toObject(), total }
  });
});

const addToCartHandler = asyncHandler(async (req, res) => {
  const { productId, quantity } = req.body;
  const cart = await addToCart(req.user.id, productId, quantity);
  const total = calculateCartTotal(cart);
  res.status(201).json({
    msg: 'Product added to cart successfully', 
    cart: { ...cart.toObject(), total }
  });
});

const removeFromCartHandler = asyncHandler(async (req, res) => {
  const { productId } = req.params;
  const cart = await removeFromCart(req.user.id, productId);
  const total = calculateCartTotal(cart);
  res.status(200).json({
    msg: 'Product removed from cart successfully', 
    cart: { ...cart.toObject(), total }
  });
});

const updateQuantityHandler = asyncHandler(async (req, res) => {
  const { productId } = req.params;
  const { quantity } = req.body;
  const cart = await updateCartQuantity(req.user.id, productId, quantity);
  const total = calculateCartTotal(cart);
  res.status(200).json({
    msg: 'Quantity updated successfully', 
    cart: { ...cart.toObject(), total }
  });
});

module.exports = {
  findUserCart, 
  addToCart: addToCartHandler, 
  removeFromCart: removeFromCartHandler, 
  updateQuantity: updateQuantityHandler
};
