import React, { useState } from 'react';
import './ServiceDisplay.css';
import ServiceData from '../servicesData';

const ServiceDisplay = () => {
  const itemsPerPage = 9; 
  const [currentPage] = useState(1); 

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentAnimals = ServiceData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className='displayAnimal'>
      <div className='animalTitle'>
        <h1>Get closer to nature</h1>
        <p>Explore Arcadia Zoo and meet our diverse animal family, from African elephants to many other species. </p>
        <p>Enjoy unique shopping, expert-led tours, a scenic Zoo Train ride, and a variety of dining options with great views. Join us for an unforgettable adventure!</p>
      </div>
      <div className='firstThree'>
        {currentAnimals.map((animal, index) => (
          <div className={index % 2 === 0 ? 'one' : 'zero'} key={index}>
            <div className='imgBox'>
              <img src={animal.url} alt={animal.title} />
            </div>
            <div className='contentBox'>
              <h2>{animal.title}</h2>
              <p>{animal.body}</p>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceDisplay;
