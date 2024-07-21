// src/axiosInstance.js
import axios from 'axios';
import { getToken,isTokenExpired } from '../config/auth';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
    // You can add other default settings here
});

// Request Interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        // Add Authorization header to every request if token is available
        const token = getToken();
        if (token && !isTokenExpired(token)) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response.status === 401) {
            // Handle 401 error (Unauthorized)
            // You can redirect to login page or show a message
            console.log('Unauthorized, redirecting to login...');
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
