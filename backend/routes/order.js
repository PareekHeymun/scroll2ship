
const express = require('express');
const router = express.Router();
const auth_middleware = require('../middleware/auth.middleware');
const { body, param } = require('express-validator');
const orderController = require('../controller/order.controller');

router.post('/',
  auth_middleware,
  [
    body('items').isArray({ min: 1 }),
    body('totalAmount').isNumeric(),
    body('shippingAddress').trim().escape()
  ],
  orderController.createOrder
);
router.get('/', auth_middleware, orderController.getOrders);
router.get('/:id', auth_middleware, param('id').isMongoId().withMessage('ERR_INVALID_ORDER_ID'), orderController.getOrderById);

module.exports = router;
