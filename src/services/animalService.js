import axios from 'axios';
import axiosInstance from '../context/axiosInstance';

const API_URL = 'http://localhost:3000';

class animalService {
  // get services
  async getAnimals() {
    return axios.get(`${API_URL}/animal/`);
  }

  async addAnimal(animal) {
    return axios.post(`${API_URL}/animal/`, animal);
  }

  async getAnimalById(id){
    return axios.get(`${API_URL}/animal/`+id);
  }
  async updateAnimal(id,animal) {
    return axios.put(`${API_URL}/animal/`+id,animal);
  }
  async deleteAnimal(id) {
    return axios.delete(`${API_URL}/animal/`+id);
  }

}

export default new animalService();