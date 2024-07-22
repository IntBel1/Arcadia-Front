import React, { useState, useEffect } from 'react';
import './Feature.css'
import habitatService from '../../../services/habitatService';


const Features = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch services
    const fetchServices = async () => {
      try {
        const response = await habitatService.getHabitats();
        setData(response.data);
      } catch (e) {
        setError('Service failed to load');
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);
return (
<div className='Feature'>
      <div className='intro'>
        <h1 className='Title'>Our <span>Habitats</span></h1>
     
      <div className='containerNew' >
          {data[0]&&
          <div className='left'>
              <h2>{data[0].title}</h2>
              <p>{data[0].description}</p>
              <a href='/services'>See More</a>
          </div>}
          <div className='right'>
             {data[1]&&  <div className='right-top'>
                  <h3>{data[1].title}</h3>
                  <a href='/services'>Lets find out</a>
              </div>}
              {data[2]&&<div className='right-bot'>
                  <h3>{data[2].title}</h3>
                  <a href='/services'>Lets find out</a>
              </div>}
          </div>
      </div>
  </div>
  </div>

)

}

export default Features