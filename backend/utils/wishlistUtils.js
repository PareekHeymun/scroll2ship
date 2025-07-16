const Wishlist = require('../models/wishlist.model');
const Product = require('../models/product.model');

/**
 * Get or create user wishlist
 * @param {string} userId - User ID
 * @returns {Promise<Object>} Wishlist object
 */
const getUserWishlist = async (userId) => {
  let wishlist = await Wishlist.findOne({ userId }).populate('products');
  if (!wishlist) {
    wishlist = new Wishlist({ userId, products: [] });
    await wishlist.save();
  }
  return wishlist;
};

/**
 * Add product to wishlist
 * @param {string} userId - User ID
 * @param {string} productId - Product ID
 * @returns {Promise<Object>} Updated wishlist
 */
const addToWishlist = async (userId, productId) => {
  // Verify product exists
  const product = await Product.findById(productId);
  if (!product) {
    throw new Error('Product not found');
  }

  let wishlist = await getUserWishlist(userId);
  
  // Check if product already exists in wishlist
  if (!wishlist.products.includes(productId)) {
    wishlist.products.push(productId);
    await wishlist.save();
  }
  
  return wishlist.populate('products');
};

/**
 * Remove product from wishlist
 * @param {string} userId - User ID
 * @param {string} productId - Product ID
 * @returns {Promise<Object>} Updated wishlist
 */
const removeFromWishlist = async (userId, productId) => {
  const wishlist = await getUserWishlist(userId);
  wishlist.products = wishlist.products.filter(
    id => id.toString() !== productId
  );
  await wishlist.save();
  return wishlist.populate('products');
};

/**
 * Check if product is in user's wishlist
 * @param {string} userId - User ID
 * @param {string} productId - Product ID
 * @returns {Promise<boolean>} True if product is in wishlist
 */
const isInWishlist = async (userId, productId) => {
  const wishlist = await getUserWishlist(userId);
  return wishlist.products.some(id => id.toString() === productId);
};

module.exports = {
  getUserWishlist,
  addToWishlist,
  removeFromWishlist,
  isInWishlist
}; 