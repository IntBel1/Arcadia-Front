import React, { useState } from 'react';
import './RegisterPage.css'
import Navbar from '../zooAnimalPage/Navbar/Navbar';
import authService from '../../services/authService';

const RegisterPage = () => {
  
  const [formData, setFormData] = useState({
    username: '',
    prenom: '',
    nom: '',
    email: '',
    password: '',
    role_id: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await authService.register(formData);
      console.log('User registered:', response.data);
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div className='loginPage'>
      <Navbar />
      <form className='loginInfor' onSubmit={handleSubmit}>
        <h2>Create account</h2>

        <div className='inputLogIn'>
          <input 
            type='text' 
            id="username" 
            name="username" 
            placeholder='UserName' 
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        <div className='inputLogIn'>
          <input 
            type='text' 
            id="prenom" 
            name="prenom" 
            placeholder='FirstName' 
            value={formData.prenom}
            onChange={handleChange}
          />
        </div>

        <div className='inputLogIn'>
          <input 
            type='text' 
            id="nom" 
            name="nom" 
            placeholder='LastName' 
            value={formData.nom}
            onChange={handleChange}
          />
        </div>

        <div className='inputLogIn'>
          <input 
            type='text' 
            id="email" 
            name="email" 
            placeholder='Email' 
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className='inputLogIn'>
          <input 
            type='password' 
            id="password" 
            name="password" 
            placeholder='Password' 
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        
        <label htmlFor="role">Role:</label>
        <select 
          id="role_id" 
          name="role_id" 
          value={formData.role_id} 
          onChange={handleChange}>
          <option value="1">Admin</option>
          <option value="2">Employee</option>
          <option value="3">Veterinarian</option>
        </select>
        
        <button type='submit'>Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;