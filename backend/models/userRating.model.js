const mongoose = require('mongoose');

const userRatingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'product', required: true },
  rating: { type: Number, min: 1, max: 5, required: true },
  review: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('userRating', userRatingSchema);
