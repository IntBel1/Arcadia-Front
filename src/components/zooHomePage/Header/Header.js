import React, { useState, useEffect } from 'react';
import Alpaca from '../assets/alpaca.png';
import './Header.css';
import Slider from './Slider';




const Header = ({ }) => {
  const [userLastName, setUserLastName] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [isTokenSet, setIsTokenSet] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('userToken');
    if (token) {
      fetch(`http://localhost:3001/api/getLastName/${token}`)
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            setUserLastName(data.lastName);
            setIsLoggedIn(true);
            setIsTokenSet(true);
          } else {
            setIsTokenSet(true);
       
          }
        })
        .catch(error => {
          console.error('Error:', error);
          setIsTokenSet(true);
      
        });
    } else {
      setIsTokenSet(true);
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
    <div className='container'>
      <div className='Nav'>
        <a href='/' className='logo'>
          <img src={Alpaca} className='alpaca' alt='cp1' />
          <p className='logo-text'>
            {' '}
            <span>Arc</span>adia{' '}
          </p>
        </a>

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
                      {localStorage.getItem('userToken') === '0866977312' ? (
                        <a href='/admin'>Account</a>
                      ) : (
                        <a href='/account'>Account</a>
                      )}
                    <button onClick={handleLogout}>Log Out</button>
                  </div>
                )}
              </div>
            ) : (
              <a href='/logins' className='button-logIn'>
                <p>Log In</p>
              </a>
            )}
            <a href='http://localhost:5173/entrance'>
            
            </a>
          </div>
        </div>
      </div>

      <Slider className='Header' />
    </div>
  );
};

export default Header;
