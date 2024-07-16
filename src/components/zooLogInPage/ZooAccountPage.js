import React, { useState, useEffect } from 'react';
import './ZooAccountPage.css'
import Navbar from '../zooAnimalPage/Navbar/Navbar';


const ZooAccountPage = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('userToken');
    if (token) {
      fetch(`http://localhost:3001/api/userInfo/${token}`)
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            setUserInfo(data.userInfo);
          } else {
           
          }
        })
        .catch(error => {
          console.error('Error:', error);
        
        });
    }
  }, []);

  return (
    <div className='UserAccount'>
      
      <Navbar/>
      {userInfo ? (
        <div className='userAccountDetail'>
          <p className='ua1'>Welcome Back</p>
          <p className='ua2'>-------- {userInfo.FIRSTNAME} {userInfo.LASTNAME} --------</p>
          <p className='ua3'>Email: {userInfo.EMAIL}</p>
          <p className='ua3'>Phone Number: {userInfo.PHONENUMBER}</p>
          <p className='ua3'>Password: {userInfo.PASSWORD}</p>
          <p className='ua5'>Your current points: {userInfo.POINT}</p>
          <p className='ua4'>Do not understand our point system ? <a href='/news'>Click here</a></p>
        </div>
      ) : (
        <p>Loading user information...</p>
      )}
    </div>
  );
};

export default ZooAccountPage;
