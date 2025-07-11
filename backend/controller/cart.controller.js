const findUserCart = async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user.id }).populate('product.productId');
  res.json(cart || { products: [], total: 0 });
};

const addToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  let cart = await Cart.findOne({ userId: req.user.id });
  if (!cart) cart = new Cart({ userId: req.user.id, products: [] });
  cart.product.push({ productId, quantity });
  await cart.save();
  res.status(201).json(cart);
}

module.exports = {findUserCart, addToCart};
