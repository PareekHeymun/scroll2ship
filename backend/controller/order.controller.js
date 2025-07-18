const Order = require('../models/order.model');
const { ApiError } = require('../utils/ApiError.util');
const { asyncHandler } = require('../utils/asyncHandler.util');

const createOrder = asyncHandler(async (req, res) => {
  const order = new Order({ ...req.body, userId: req.user.id });
  await order.save();
  res.status(201).json({ msg: 'Order created successfully', order });
});

const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ userId: req.user.id });
  res.status(200).json({ msg: 'Orders fetched successfully', orders });
});

const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (!order) throw new ApiError(404, 'Order not found');
  res.status(200).json({ msg: 'Order fetched successfully', order });
});

module.exports = { createOrder, getOrders, getOrderById };
