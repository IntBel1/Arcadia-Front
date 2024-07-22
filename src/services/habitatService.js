import axios from 'axios';
import axiosInstance from '../context/axiosInstance';

const API_URL = 'http://localhost:3000';

class habitatService {
  // get services
  async getHabitats() {
    return axios.get(`${API_URL}/habitat/`);
  }

  async addHabitat(habitat) {
    return axios.post(`${API_URL}/habitat/`, habitat);
  }

  async getHabitatById(id){
    return axios.get(`${API_URL}/habitat/`+id);
  }
  async updateHabitat(id,habitat) {
    return axios.put(`${API_URL}/habitat/`+id,habitat);
  }
  async deleteHabitat(id) {
    return axios.delete(`${API_URL}/habitat/`+id);
  }

}

export default new habitatService();