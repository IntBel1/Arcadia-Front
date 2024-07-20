import axios from 'axios';

const API_URL = 'http://localhost:3000';

class AuthService {
  // Register user
  register(userData) {
    return axios.post(`${API_URL}/user/register`, userData);
  }

  // Login user
  login(userData) {
    return axios.post(`${API_URL}/user/login`, userData);
  }

}

export default new AuthService();
