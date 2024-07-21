import React, { useState, useEffect } from 'react';
import './ServiceDisplay.css';
import serviceService from '../../../services/serviceService';


const ServiceDisplay = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch services
    const fetchServices = async () => {
      try {
        const response = await serviceService.getServices();
        setData(response.data);
      } catch (e) {
        setError('Service failed to load');
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []); // Empty dependency array to run only once when the component mounts

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className='displayAnimal'>
      <div className='animalTitle'>
        <h1>Get closer to nature</h1>
        <p>Explore Arcadia Zoo and meet our diverse animal family, from African elephants to many other species. </p>
        <p>Enjoy unique shopping, expert-led tours, a scenic Zoo Train ride, and a variety of dining options with great views. Join us for an unforgettable adventure!</p>
      </div>
      <div className='firstThree'>
        {data && data.map((service, index) => (
          <div className={index % 2 === 0 ? 'one' : 'zero'} key={index}>
            <div className='imgBox'>
              <img src={service.image} alt={service.title} />
            </div>
            <div className='contentBox'>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceDisplay;
