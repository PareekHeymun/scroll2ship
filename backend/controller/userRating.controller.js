const UserRating = require('../models/userRating.model');

exports.addRating = async (req, res) => {
  try {
    const rating = new UserRating({ ...req.body, user: req.user._id });
    await rating.save();
    res.status(201).json(rating);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getRatingsForProduct = async (req, res) => {
  try {
    const ratings = await UserRating.find({ product: req.params.productId });
    res.json(ratings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUserRatings = async (req, res) => {
  try {
    const ratings = await UserRating.find({ user: req.user._id });
    res.json(ratings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
