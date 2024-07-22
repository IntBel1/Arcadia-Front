import axios from 'axios';
import axiosInstance from '../context/axiosInstance';

const API_URL = 'http://localhost:3000';

class serviceService {
  // get services
  async getServices() {
    return axios.get(`${API_URL}/service/`);
  }

  async addService(service) {
    return axios.post(`${API_URL}/service/`, service);
  }

  async getServiceById(id){
    return axios.get(`${API_URL}/service/`+id);
  }
  async updateService(id,service) {
    return axios.put(`${API_URL}/service/`+id,service);
  }
  async deleteService(id) {
    return axios.delete(`${API_URL}/service/`+id);
  }

}

export default new serviceService();