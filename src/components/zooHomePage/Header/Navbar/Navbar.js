import React, { useState, useEffect } from 'react';
import Alpaca from '../assets/alpaca.png';
import './Navbar.css';
import { BsSearch } from 'react-icons/bs';


const Navbar = ({ showSnowFlake }) => {
    const [userLastName, setUserLastName] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showOptions, setShowOptions] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('userToken');
        if (token) {
        fetch(`http://localhost:3001/api/getLastName/${token}`)
            .then(response => response.json())
            .then(data => {
            if (data.success) {
                setUserLastName(data.lastName);
                setIsLoggedIn(true);
            } else {
                
            }
            })
            .catch(error => {
            console.error('Error:', error);
       
            });
        }
    }, []);

    const handleUserClick = () => {
        setShowOptions(prevState => !prevState);
    };

    const handleLogout = () => {
        localStorage.removeItem('userToken');
        setIsLoggedIn(false);
        setShowOptions(false);
    };

  return (
    <div className='Nav'>
        <div className='logo'>
          <img src={Alpaca} className='alpaca' alt='cp1' />
          <p className='logo-text'>
            {' '}
            <span>Zoo</span>lander{' '}
          </p>
        </div>

        <div className='rightNav'>
          <menu>
          <ul className='nav-links'>
              <li>
                <a href='/'>Home</a>
              </li>
              <li>
                <a href='/Services'>Services</a>
              </li>
              <li>
                <a href='/habitats'>Habitats</a>
              </li>
              <li>
                <a href='/Contact'>Contact</a>
              </li>
            </ul>
          </menu>
          <div className='botNav'>
            {isLoggedIn ? (
              <div className='userOptions'>
                <button className='button-logIn' onClick={handleUserClick}>
                  <p>{userLastName}</p>
                </button>
                {showOptions && (
                  <div className='options'>
                    <a href='/account'>Account</a>
                    <button onClick={handleLogout}>Log Out</button>
                  </div>
                )}
              </div>
            ) : (
              <a href='/logins' className='button-logIn'>
                <p>Log In</p>
              </a>
            )}
            <BsSearch size={30} color='orange' className='finalLogoNav' />
          </div>
         
        </div>
      </div>
  )
}

export default Navbar