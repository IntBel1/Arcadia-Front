
import './AnimalModif.css';
import Navbar from '../../../zooAnimalPage/Navbar/Navbar'; 




const ModifPage = () => {
  
  return (
    <div className='loginPage'>
      <Navbar />
      <form className='loginInfor' >
        <h2>Modify Animal</h2>

        <div className='inputLogIn'>
          <input type='text' placeholder='title'/>
        </div>

        <div className='inputLogIn'>
          <input type='text' placeholder='name'/>
        </div>
        <div className='inputLogIn'>
          <input type='text' placeholder='habitat'/>
        </div>
        <div className='inputLogIn'>
          <input type='text' placeholder='lifeStyle'/>
        </div>
        <div className='inputLogIn'>
          <input type='text' placeholder='breed'/>
        </div>
        <label className="inputLogIn">url :</label>
        <input type="file" id="fileInput" className="image" accept="image/*"/>
        <input type="submit" className="image1" value="Envoyer"/>


        
        <button type='submit'>Modify</button>

        
      </form>
    </div>
  );
};

export default ModifPage;
