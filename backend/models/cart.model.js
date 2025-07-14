const mongoose = require('mongoose');

const cart_schema = mongoose.Schema({
  userId: {type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true},
  products: [
              {
                productId: {type: mongoose.Schema.Types.ObjectId, ref: 'product', required: true},
                quantity: {type: Number, default: 1}
              }
            ],
  total: {type: Number, default: true},
  createdAt: {type: Date, default: Date.now}
});

cart_schema.methods.findTotal = function(){
  //needs to be implemented
  return 0;
};

module.exports = mongoose.model('cart', cart_schema);