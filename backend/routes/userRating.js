const express = require('express');
const router = express.Router();
const auth_middleware = require('../middleware/auth.middleware');
const { body, param } = require('express-validator');
const userRatingController = require('../controller/userRating.controller');

router.post('/add',
  auth_middleware,
  [
    body('product').isMongoId().withMessage('ERR_INVALID_PRODUCT_ID'),
    body('rating').isInt({ min: 1, max: 5 }).withMessage('ERR_INVALID_RATING'),
    body('review').optional().trim().escape()
  ],
  userRatingController.addRating
);
router.get('/product/:productId', param('productId').isMongoId().withMessage('ERR_INVALID_PRODUCT_ID'), userRatingController.getRatingsForProduct);
router.get('/user', auth_middleware, userRatingController.getUserRatings);

module.exports = router;
