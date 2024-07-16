import React, { useState } from 'react';
import './AnimalDisplay.css';

import { Link } from 'react-router-dom';
import AnimalData from '../../zooAnimalsDetail/animalsData';

const AnimalDisplay = () => {
  const itemsPerPage = 9; 
  const [currentPage, setCurrentPage] = useState(1); 

  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentAnimals = AnimalData.slice(indexOfFirstItem, indexOfLastItem);


  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(AnimalData.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }


  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className='displayAnimal'>
      <div className='animalTitle'>
        <h1>Get closer to nature</h1>
        <p>Meet our animals. From a herd of African elephants to 30 different species of other animals, all together we form a big happy family. </p>
        <p>Discover incredible facts about your favourite species - from their favourite snacks to the threats they face in the wild. And find out how we're using our expertise to protect them with cutting-edge wildlife conservation</p>
      </div>
      <div className='firstThree'>
        {currentAnimals.map((animal, index) => (
          <div className={index % 2 === 0 ? 'one' : 'zero'} key={index}>
            <div className='imgBox'>
              <img src={animal.url} alt={animal.title} />
            </div>
            <div className='contentBox'>
              <h2>{animal.title}</h2>
              <p>{animal.lifeStyle}</p>
              <Link to={`/animals/${animal.id}`}>Read more</Link>
            </div>
          </div>
        ))}
      </div>
      <div className='pagination'>
        {pageNumbers.map((number) => (
          <button key={number} onClick={() => handleClick(number)} className={number % 2 === 0 ? 'paginationButtonZero' : 'paginationButtonOne'}>
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AnimalDisplay;
