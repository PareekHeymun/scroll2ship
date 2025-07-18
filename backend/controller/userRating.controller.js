const UserRating = require('../models/userRating.model');
const { ApiError } = require('../utils/ApiError.util');
const { asyncHandler } = require('../utils/asyncHandler.util');

const addRating = asyncHandler(async (req, res) => {
  const rating = new UserRating({ ...req.body, userId: req.user.id });
  await rating.save();
  res.status(201).json({ msg: 'Rating added successfully', rating });
});

const getRatingsForProduct = asyncHandler(async (req, res) => {
  const ratings = await UserRating.find({ productId: req.params.productId });
  res.status(200).json({ msg: 'Product ratings fetched successfully', ratings });
});

const getUserRatings = asyncHandler(async (req, res) => {
  const ratings = await UserRating.find({ userId: req.user.id });
  res.status(200).json({ msg: 'User ratings fetched successfully', ratings });
});

module.exports = { addRating, getRatingsForProduct, getUserRatings };
