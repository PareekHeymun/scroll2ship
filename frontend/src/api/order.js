import axiosInstance from './axiosInstance';

export const createOrder = (data) => axiosInstance.post('/order', data);
export const getOrders = () => axiosInstance.get('/order');
export const getOrderById = (id) => axiosInstance.get(`/order/${id}`);
