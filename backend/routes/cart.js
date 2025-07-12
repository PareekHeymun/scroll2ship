const router = require('express').Router();
const auth = require('../middleware/auth.middleware');
const { body } = require('express-validator');
const cartController = require('../controller/cart.controller.js');

router.get('/', auth, cartController.findUserCart);
router.post('/add',
  auth,
  [
    body('productId').isMongoId().withMessage('ERR_INVALID_PRODUCT_ID'),
    body('quantity').isInt({ min: 1 }).withMessage('ERR_INVALID_QUANTITY')
  ],
  cartController.addToCart
);

module.exports = router;
