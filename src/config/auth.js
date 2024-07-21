// src/utils/auth.js
import {jwtDecode} from 'jwt-decode';

export const isTokenExpired = (token) => {
    if (!token) return true;

    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000;

    return decodedToken.exp < currentTime;
};

export const getToken = () => localStorage.getItem('token');
