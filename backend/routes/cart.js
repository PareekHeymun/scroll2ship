const router = require('express').Router();
const auth = require('../middleware/auth.middleware');
const cartController = require('../controller/cart.controller.js');

router.get('/', auth, cartController.findUserCart);
router.post('/add', auth, cartController.addToCart);

module.exports = router;
