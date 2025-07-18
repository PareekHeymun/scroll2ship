import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000/api', // Backend now runs on port 4000
  withCredentials: true // Send cookies for auth
});

export default axiosInstance;
