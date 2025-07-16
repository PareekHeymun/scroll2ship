import axiosInstance from './axiosInstance';

export const getProducts = () => axiosInstance.get('/products');
export const getProduct = (id) => axiosInstance.get(`/products/${id}`);
export const uploadProduct = (data) => axiosInstance.post('/products/uploadProduct', data);
