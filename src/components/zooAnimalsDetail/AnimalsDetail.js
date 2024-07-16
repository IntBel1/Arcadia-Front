
import './AnimalsDetail.css';
import { useParams } from 'react-router-dom';
import AnimalData from './animalsData';
import Footer from './Footer/Footer';
import Navbar from '../zooAnimalPage/Navbar/Navbar';

const AnimalsDetail = () => {
    


    const { id } = useParams(); 

    
    const animal = AnimalData.find((animal) => animal.id === parseInt(id));
  
  
    if (!animal) {
      return <div>Object not found</div>;
    }


   
    return (
      <div className='allAnimalDetail'>

        <div className="animal-detail" >
          
          <Navbar/>

          <div className='eachAnimalsDetail'>
            <div className='firstDetails'>
              <h2>The {animal.title}</h2>
              <p>{animal.lifeStyle}</p>
              <h1>So what does this {animal.title} came from ?</h1>
              <p><span className='aats'>Habitat:</span> {animal.habitat}</p>
              <p><span className='aats'>Breed:</span> {animal.breed}</p>
            </div>
            <div className='firstDetailsImage'>
              <img src={animal.url} alt={animal.title} />
            </div>
          </div>
          </div>

        <Footer/>
      </div>
    );
}

export default AnimalsDetail;
