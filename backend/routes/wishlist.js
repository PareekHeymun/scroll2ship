const express = require('express');
const router = express.Router();
const auth_middleware = require('../middleware/auth.middleware');
const { body, param } = require('express-validator');
const wishlistController = require('../controller/wishlist.controller');

router.get('/', auth_middleware, wishlistController.getWishlist);
router.post('/add',
  auth_middleware,
  [body('productId').isMongoId().withMessage('ERR_INVALID_PRODUCT_ID')],
  wishlistController.addToWishlist
);
router.delete('/:productId',
  auth_middleware,
  [param('productId').isMongoId().withMessage('ERR_INVALID_PRODUCT_ID')],
  wishlistController.removeFromWishlist
);

module.exports = router;
