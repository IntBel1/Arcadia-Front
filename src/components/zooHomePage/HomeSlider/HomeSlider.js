import React, { useState, useEffect } from 'react';
import './HomeSlider.css'
import animalService from '../../../services/animalService';

const HomeSlider = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch services
    const fetchServices = async () => {
      try {
        const response = await animalService.getAnimals();
        setData(response.data);
      } catch (e) {
        setError('animal failed to load');
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);
return (
  <div className='New'>
      <h1>WHAT animals DO WE HAVE ?</h1>
     
      <div className='containerNew' >
          {data[0]&&
          <div className='left'>
              <h2>{data[0].title}</h2>
              <p>{data[0].description}</p>
              <a href='/habitats'>See More</a>
          </div>}
          <div className='right'>
             {data[1]&&  <div className='right-top'>
                  <h3>{data[1].title}</h3>
                  <a href='/habitats'>Lets find out</a>
              </div>}
              {data[2]&&<div className='right-bot'>
                  <h3>{data[2].title}</h3>
                  <a href='/habitats'>Lets find out</a>
              </div>}
          </div>
      </div>
  </div>
)
}

export default HomeSlider