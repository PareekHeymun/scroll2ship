import axiosInstance from './axiosInstance';

export const getWishlist = () => axiosInstance.get('/wishlist');
export const addToWishlist = (data) => axiosInstance.post('/wishlist/add', data);
export const removeFromWishlist = (productId) => axiosInstance.delete(`/wishlist/${productId}`);
