import axios from 'axios';
import axiosInstance from '../context/axiosInstance';

const API_URL = 'http://localhost:3000';

class AuthService {
  // Register user
  async register(userData) {
    return axios.post(`${API_URL}/user/register`, userData);
  }

  // Login user
  async login(userData) {
     return axios.post(`${API_URL}/user/login`, userData);
  }

}

export default new AuthService();
