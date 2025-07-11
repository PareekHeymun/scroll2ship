const express = require('express');
const router = express.Router();
const auth_middleware = require('../middleware/auth.middleware');
const wishlistController = require('../controller/wishlist.controller');

router.post('/add', auth_middleware, wishlistController.addToWishlist);
router.get('/', auth_middleware, wishlistController.getWishlist);
router.post('/remove', auth_middleware, wishlistController.removeFromWishlist);

module.exports = router;
