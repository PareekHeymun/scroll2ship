const testCart = new Cart({
  userId: '64f1a2b3c4d5e6f789012345',
  products: [{ productId: '64f1a2b3c4d5e6f789012346', quantity: 2 }]
});
testCart.save().then(console.log).catch(console.error);
