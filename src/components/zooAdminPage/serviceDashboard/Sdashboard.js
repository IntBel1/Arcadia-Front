
import './Sdashboard.css';
import React, { useState, useEffect } from 'react';
import serviceService from '../../../services/serviceService';
import Navbar from '../../zooAnimalPage/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';


const DashPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

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

  const handleDelete = async (id) => {
    try {
      await serviceService.deleteService(id);
    } catch (error) {
      console.error('Error deleting service:', error);
    }
  };

  const handleModify = (id) => {
    navigate(`/services/${id}/edit`);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
return (
     
        <div className='DashPage'>
      <Navbar />
      <form className='DashInfor' >
        <h2>Member Dashboard</h2>
    
        <div className="table-container">
      <table className="service-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((service, index) => (
            <tr key={service.id}>
              <td>{service.title}</td>
              <td>{service.description}</td>
              <td>
                <button onClick={() => handleModify(service.service_id)} className="modify-button">Modify</button>
                <button onClick={() => handleDelete(service.service_id)} className="delete-button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
        
      </form>
    </div>
 
  );
}


export default DashPage;