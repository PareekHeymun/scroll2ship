const express = require('express');
const router = express.Router();
const auth_middleware = require('../middleware/auth.middleware');
const orderController = require('../controller/order.controller');

router.post('/', auth_middleware, orderController.createOrder);
router.get('/', auth_middleware, orderController.getOrders);
router.get('/:id', auth_middleware, orderController.getOrderById);

module.exports = router;
