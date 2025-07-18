import axiosInstance from './axiosInstance';

export const signup = (data) => axiosInstance.post('/auth/signup', data);
export const signin = (data) => axiosInstance.post('/auth/signin', data);
export const logout = () => axiosInstance.post('/auth/logout');
export const getProfile = () => axiosInstance.get('/auth/profile');
