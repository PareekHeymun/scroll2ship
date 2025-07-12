const express = require('express');
const router = express.Router();
const auth_middleware = require('../middleware/auth.middleware');
const { body } = require('express-validator');
const wishlistController = require('../controller/wishlist.controller');

router.post('/add',
  auth_middleware,
  [body('productId').isMongoId().withMessage('ERR_INVALID_PRODUCT_ID')],
  wishlistController.addToWishlist
);
router.get('/', auth_middleware, wishlistController.getWishlist);
router.post('/remove',
  auth_middleware,
  [body('productId').isMongoId().withMessage('ERR_INVALID_PRODUCT_ID')],
  wishlistController.removeFromWishlist
);

module.exports = router;
