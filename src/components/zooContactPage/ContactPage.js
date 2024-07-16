import React, { useState } from 'react';
import './ContactPage.css';
import { MdEmail,MdAccountBox } from "react-icons/md";
import { FaRegMessage } from "react-icons/fa6";
import Navbar from '../zooAnimalPage/Navbar/Navbar';


const ContactPage = () => {
  const [email, setEmail] = useState('');
  const [Omessage, setOmessage] = useState('');
  const [message, setMessage] = useState('');
  const [pseudo, setPseudo] = useState('');
  const [Amassage, setAmassage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = () => {
    if (!email || !Omessage || !message ) {
      setErrorMessage('Please fill in all the boxes.');
      return;
    }
    // Handle registration logic here
    setErrorMessage('');
    console.log('Registration successful');
  };

  const handleRegister1 = () => {
    if (!pseudo || !Amassage) {
      setErrorMessage('Please fill in all the boxes.');
      return;
    }
    // Handle registration logic here
    setErrorMessage('');
    console.log('Registration successful');
  };



  
    return (
      <div className="contactPage">
        <Navbar />
        <div className='RegisterDetail'>
          <h2>Contact</h2>
          {errorMessage && <p className="error">{errorMessage}</p>}
    
          <div className='RegisterInfo'>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <MdEmail className='regisIcon' color='white' />
          </div>
    
          <div className='RegisterInfo'>
            <input
              type="text"
              placeholder="Object Message"
              value={Omessage}
              onChange={(e) => setOmessage(e.target.value)}
            />
            <FaRegMessage className='regisIcon' color='white' />
          </div>
    
          <div className='RegisterInfo'>
            <input
              type="text"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <FaRegMessage className='regisIcon' color='white' />
          </div>
    
          <button onClick={handleRegister}>Send</button>
        </div>
    

        
          <div className='RegisterDetail2'>
            <h2>Visitor Review</h2>
            {errorMessage && <p className="error">{errorMessage}</p>}
    
            <div className='RegisterInfo'>
              <input
                type="text"
                placeholder="Pseudo"
                value={pseudo}
                onChange={(e) => setPseudo(e.target.value)}
              />
              <MdAccountBox className='regisIcon' color='white' />
            </div>
    
            <div className='RegisterInfo'>
              <input
                type="text"
                placeholder="Additional Message"
                value={Amassage}
                onChange={(e) => setAmassage(e.target.value)}
              />
              <FaRegMessage className='regisIcon' color='white' />
            </div>
    
            <button onClick={handleRegister1}>Send</button>
          </div>
          
        </div>
     
    );
    
};


export default ContactPage;
