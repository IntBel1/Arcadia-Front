import axios from 'axios';
import axiosInstance from '../context/axiosInstance';

const API_URL = 'http://localhost:3000';

class serviceService {
  // get services
  async getServices() {
    return axios.get(`${API_URL}/service/`);
  }



}

export default new serviceService();