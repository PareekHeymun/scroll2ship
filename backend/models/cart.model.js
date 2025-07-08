const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  products: [{
    productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, default: 1 }
  }],
  total: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

cartSchema.methods.total_cartCost = function() {
  // Implement logic later with product prices
  return 0;
};

module.exports = mongoose.model('cart', cartSchema);
