const UserRating = require('../models/userRating.model');
const { ApiError } = require('../utils/ApiError.util');
const { asyncHandler } = require('../utils/asyncHandler.util');

exports.addRating = asyncHandler(async (req, res) => {
  const rating = new UserRating({ ...req.body, user: req.user._id });
  await rating.save();
  res.status(201).json({ msg: 'Rating added successfully', rating });
});

exports.getRatingsForProduct = asyncHandler(async (req, res) => {
  const ratings = await UserRating.find({ product: req.params.productId });
  res.status(200).json({ msg: 'Product ratings fetched successfully', ratings });
});

exports.getUserRatings = asyncHandler(async (req, res) => {
  const ratings = await UserRating.find({ user: req.user._id });
  res.status(200).json({ msg: 'User ratings fetched successfully', ratings });
});
