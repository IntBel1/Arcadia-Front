
import React, { useState } from 'react';
import Navbar from '../../../zooHabitatsPage/Navbar/Navbar'; // Adjust the import based on your project structure
import AuthService from '../../../../services/authService' // Import the AuthService

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    prenom: '',
    nom: '',
    email: '',
    password: '',
    role_id: '1'
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
      const response = await AuthService.register(formData);
      console.log('User registered:', response.data);
      // You can add any additional logic here, like redirecting the user or showing a success message
    } catch (error) {
      console.error('Error registering user:', error);
      // Handle the error appropriately, such as showing an error message to the user
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
          onChange={handleChange}
        >
          <option value="1">Employee</option>
          <option value="2">Veterinarian</option>
        </select>
        
        <button type='submit'>Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
