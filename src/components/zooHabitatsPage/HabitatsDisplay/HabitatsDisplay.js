import React, { useState } from 'react';
import './HabitatsDisplay.css';
import habitatsData from '../habitatsData';
import { Link } from 'react-router-dom';
import AnimalData from '../../zooAnimalsDetail/animalsData';

const HabitatDisplay = () => {
  const itemsPerPage = 5; 
  const [currentPage] = useState(1); 

  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentAnimals = habitatsData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className='displayAnimal'>
      <div className='animalTitle'>
        <h1>Get closer to nature</h1>
        <p>Meet our Habitats. From a herd of Savane Africaine to  different species of other habitats, all together we form a big happy family. </p>
        <p>Discover incredible facts about your favourite species - from their favourite snacks to the threats they face in the wild. And find out how we're using our expertise to protect them with cutting-edge wildlife conservation</p>
      </div>
      <div className='firstThree'>
        {currentAnimals.map((habitat, index) => (
          <div className={index % 2 === 0 ? 'one' : 'zero'} key={index}>
            <div className='imgBox'>
              <img src={habitat.url} alt={habitat.title} />
            </div>
            <div className='contentBox'>
              <h2>{habitat.title}</h2>
              <p>{habitat.body}</p>
              <p>{habitat.animals}</p>
              
            </div>
          </div>
        ))}
      </div>
    </div>
    
  );
  
};

export default HabitatDisplay;
