const Cart = require('../models/cart.model');
const Product = require('../models/product.model');

/**
 * Get or create user cart
 * @param {string} userId - User ID
 * @returns {Promise<Object>} Cart object
 */
const getUserCart = async (userId) => {
  let cart = await Cart.findOne({ userId }).populate('products.productId');
  if (!cart) {
    cart = new Cart({ userId, products: [] });
    await cart.save();
  }
  return cart;
};

/**
 * Add product to cart
 * @param {string} userId - User ID
 * @param {string} productId - Product ID
 * @param {number} quantity - Quantity to add
 * @returns {Promise<Object>} Updated cart
 */
const addToCart = async (userId, productId, quantity = 1) => {
  // Verify product exists
  const product = await Product.findById(productId);
  if (!product) {
    throw new Error('Product not found');
  }

  let cart = await getUserCart(userId);
  
  // Check if product already exists in cart
  const existingProduct = cart.products.find(p => p.productId.toString() === productId);
  if (existingProduct) {
    existingProduct.quantity += quantity;
  } else {
    cart.products.push({ productId, quantity });
  }
  
  await cart.save();
  return cart.populate('products.productId');
};

/**
 * Remove product from cart
 * @param {string} userId - User ID
 * @param {string} productId - Product ID
 * @returns {Promise<Object>} Updated cart
 */
const removeFromCart = async (userId, productId) => {
  const cart = await getUserCart(userId);
  cart.products = cart.products.filter(p => p.productId.toString() !== productId);
  await cart.save();
  return cart.populate('products.productId');
};

/**
 * Update product quantity in cart
 * @param {string} userId - User ID
 * @param {string} productId - Product ID
 * @param {number} quantity - New quantity
 * @returns {Promise<Object>} Updated cart
 */
const updateCartQuantity = async (userId, productId, quantity) => {
  const cart = await getUserCart(userId);
  const product = cart.products.find(p => p.productId.toString() === productId);
  
  if (!product) {
    throw new Error('Product not found in cart');
  }
  
  if (quantity <= 0) {
    return await removeFromCart(userId, productId);
  }
  
  product.quantity = quantity;
  await cart.save();
  return cart.populate('products.productId');
};

/**
 * Calculate cart total
 * @param {Object} cart - Cart object with populated products
 * @returns {number} Total amount
 */
const calculateCartTotal = (cart) => {
  return cart.products.reduce((total, item) => {
    const product = item.productId;
    return total + (product ? product.price * item.quantity : 0);
  }, 0);
};

module.exports = {
  getUserCart,
  addToCart,
  removeFromCart,
  updateCartQuantity,
  calculateCartTotal
}; 