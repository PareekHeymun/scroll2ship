const { ApiError } = require('../utils/ApiError.util');
const { asyncHandler } = require('../utils/asyncHandler.util');
const { 
  getUserWishlist, 
  addToWishlist, 
  removeFromWishlist 
} = require('../utils/wishlistUtils');

const getWishlist = asyncHandler(async (req, res) => {
  const wishlist = await getUserWishlist(req.user.id);
  res.status(200).json({ msg: 'Wishlist fetched successfully', wishlist });
});

const addToWishlistHandler = asyncHandler(async (req, res) => {
  const { productId } = req.body;
  const wishlist = await addToWishlist(req.user.id, productId);
  res.status(200).json({ msg: 'Product added to wishlist successfully', wishlist });
});

const removeFromWishlistHandler = asyncHandler(async (req, res) => {
  const { productId } = req.params;
  const wishlist = await removeFromWishlist(req.user.id, productId);
  res.status(200).json({ msg: 'Product removed from wishlist successfully', wishlist });
});

module.exports = { 
  getWishlist, 
  addToWishlist: addToWishlistHandler, 
  removeFromWishlist: removeFromWishlistHandler 
};
