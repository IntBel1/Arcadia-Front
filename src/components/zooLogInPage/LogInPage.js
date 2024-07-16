import React, { useState } from 'react';
import './LogInPage.css';
import { FaUser } from 'react-icons/fa';
import { IoIosLock } from 'react-icons/io';
import Navbar from '../zooAnimalPage/Navbar/Navbar';


const LogInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
 
  const handleLogin = (event) => {
    event.preventDefault(); 

    if (email === '') {
      setErrorMessage('Please enter your email.');
      return;
    }

    if (password === '') {
      setErrorMessage('Please enter a password.');
      return;
    }

    
    fetch('http://localhost:3001/api/login', {
      method: 'POST',
      body: JSON.stringify({ setEmail, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          
          localStorage.setItem('userToken', email);
          
          window.location.href = '/';
        } else {
          setErrorMessage(data.message);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handlePhoneNumberChange = (event) => {
    setEmail(event.target.value);
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
            placeholder='Email'
            value={email}
            onChange={handlePhoneNumberChange}
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

        <div className='LogInRF'>
          <label>
            <input type='checkbox' />
            Remember me
          </label>
          <a href='#'>Forgot password ?</a>
        </div>

        <button type='submit'>Log in</button>

        
      </form>
    </div>
  );
};

export default LogInPage;
