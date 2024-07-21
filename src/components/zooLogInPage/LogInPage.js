import React, { useState,useContext  } from 'react';
import './LogInPage.css';
import { FaUser } from 'react-icons/fa';
import { IoIosLock } from 'react-icons/io';
import Navbar from '../zooAnimalPage/Navbar/Navbar';
import { AuthContext } from '../../context/authContext';
import authService from '../../services/authService';



const LogInPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { setAuth } = useContext(AuthContext);
  const { login } = useContext(AuthContext);
 
  const handleLogin = async (event) => {
    event.preventDefault(); 

    if (username === '') {
      setErrorMessage('Please enter your email.');
      return;
    }

    if (password === '') {
      setErrorMessage('Please enter a password.');
      return;
    }
    try{
      const response = await authService.login({username,password});
      const { token, role } = response.data;
            login(token, role);
      localStorage.setItem('token', token);
    }
    catch(e) {
      alert('Login failed');
    }    
  };


  const handleEmailhange = (event) => {
    setUsername(event.target.value);
    if (event.target.value !== '' && errorMessage) {
      setErrorMessage('');
    }
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    if (event.target.value !== '' && errorMessage) {
      setErrorMessage('');
    }
  };

  return (
    <div className='loginPage'>
      <Navbar />
      <form className='loginInfor' onSubmit={handleLogin}>
        <h2>Log In</h2>
        {errorMessage && <p className='error-message'>{errorMessage}</p>}

        <div className='inputLogIn'>
          <input
            type='text'
            placeholder='Username'
            value={username}
            onChange={handleEmailhange}
          />
          <FaUser size={25} className='loginIcon' color='white'/>
        </div>

        <div className='inputLogIn'>
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={handlePasswordChange}
          />
          <IoIosLock size={27} className='loginIcon' color='white'/>
        </div>
        <button type='submit'>Log in</button>
      </form>
    </div>
  );
};

export default LogInPage;
