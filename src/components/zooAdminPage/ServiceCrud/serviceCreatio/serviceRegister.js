import React, { useState,useContext,useEffect  } from 'react';
import { useParams } from 'react-router-dom'; // To get URL parameters

import './serviceRegister.css';
import Navbar from '../../../zooAnimalPage/Navbar/Navbar'; 
import serviceService from '../../../../services/serviceService';
const Servreg = ({onSuccess}) => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: null,
  });
  useEffect(() => {
    if (id) {
      // Fetch existing data for update
      const fetchService = async () => {
        try {
          const response = await serviceService.getServiceById(id);
          setFormData({
            title: response.data.title,
            description: response.data.description,
            image: null, // Image will be handled separately
          });
        } catch (error) {
          console.error('Error fetching service data:', error);
        }
      };

      fetchService();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('title', formData.title);
    formDataToSend.append('description', formData.description);
    if (formData.image) {
      formDataToSend.append('image', formData.image);
    }

    try {
      let response;
      if (id) {
        // Update existing service
        response = await serviceService.updateService(id, formDataToSend);
      } else {
        // Add new service
        response = await serviceService.addService(formDataToSend);
      }
      console.log('Service added/updated:', response.data);
      onSuccess && onSuccess(response.data);
    } catch (error) {
      console.error('Error adding/updating service:', error);
    }
  };

  return (
    <div className='loginPage'>
      <Navbar />
      <form className='loginInfor' onSubmit={handleSubmit}>
        <h2>Create Service</h2>

        <div className='inputLogIn'>
          <input 
            type='text' 
            id="title" 
            name="title" 
            placeholder='title' 
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        <div className='inputLogIn'>
          <input
            type="textArea" 
            id="description" 
            name="description" 
            placeholder='description' 
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <div className='inputLogIn'>
          <input 
            type='file' 
            id="image" 
            name="image" 
            onChange={handleChange}
          />
        </div>
        <button type='submit'>{id?'update service':'add service'}</button>
      </form>
    </div>
  );
};

export default Servreg;
