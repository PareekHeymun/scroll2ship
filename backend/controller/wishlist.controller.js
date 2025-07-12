const Wishlist = require('../models/wishlist.model');
const { ApiError } = require('../utils/ApiError.util');
const { asyncHandler } = require('../utils/asyncHandler.util');

exports.addToWishlist = asyncHandler(async (req, res) => {
  let wishlist = await Wishlist.findOne({ user: req.user._id });
  if (!wishlist) wishlist = new Wishlist({ user: req.user._id, products: [] });
  if (!wishlist.products.includes(req.body.productId)) {
    wishlist.products.push(req.body.productId);
    await wishlist.save();
  }
  res.status(200).json({ msg: 'Product added to wishlist successfully', wishlist });
});

exports.getWishlist = asyncHandler(async (req, res) => {
  const wishlist = await Wishlist.findOne({ user: req.user._id }).populate('products');
  if (!wishlist) throw new ApiError(404, 'Wishlist not found');
  res.status(200).json({ msg: 'Wishlist fetched successfully', wishlist });
});

exports.removeFromWishlist = asyncHandler(async (req, res) => {
  const wishlist = await Wishlist.findOne({ user: req.user._id });
  if (!wishlist) throw new ApiError(404, 'Wishlist not found');
  wishlist.products = wishlist.products.filter(
    id => id.toString() !== req.body.productId
  );
  await wishlist.save();
  res.status(200).json({ msg: 'Product removed from wishlist successfully', wishlist });
});
