const Wishlist = require('../models/wishlist.model');

exports.addToWishlist = async (req, res) => {
  try {
    let wishlist = await Wishlist.findOne({ user: req.user._id });
    if (!wishlist) wishlist = new Wishlist({ user: req.user._id, products: [] });
    if (!wishlist.products.includes(req.body.productId)) {
      wishlist.products.push(req.body.productId);
      await wishlist.save();
    }
    res.json(wishlist);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.findOne({ user: req.user._id }).populate('products');
    res.json(wishlist);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.removeFromWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.findOne({ user: req.user._id });
    if (wishlist) {
      wishlist.products = wishlist.products.filter(
        id => id.toString() !== req.body.productId
      );
      await wishlist.save();
    }
    res.json(wishlist);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
