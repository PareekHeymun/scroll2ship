const express = require('express');
const router = express.Router();
const auth_middleware = require('../middleware/auth.middleware');
const userRatingController = require('../controller/userRating.controller');

router.post('/add', auth_middleware, userRatingController.addRating);
router.get('/product/:productId', userRatingController.getRatingsForProduct);
router.get('/user', auth_middleware, userRatingController.getUserRatings);

module.exports = router;
