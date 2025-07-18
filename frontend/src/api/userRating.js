import axiosInstance from './axiosInstance';

export const addRating = (data) => axiosInstance.post('/userRating/add', data);
export const getRatingsForProduct = (productId) => axiosInstance.get(`/userRating/product/${productId}`);
export const getUserRatings = () => axiosInstance.get('/userRating/user');
