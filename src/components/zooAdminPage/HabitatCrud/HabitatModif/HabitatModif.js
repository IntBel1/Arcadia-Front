
import './HabitatModif.css';
import Navbar from '../../../zooAnimalPage/Navbar/Navbar'; 




const ModifPage = () => {
  

  return (
    <div className='loginPage'>
      <Navbar />
      <form className='loginInfor' >
        <h2>Modify Habitat</h2>
        <div className='inputLogIn'>
          <input type='text' placeholder='title'/>
        </div>
        <div className='inputLogIn'>
          <input type='text' placeholder='intro'/>
        </div>
        <div className='inputLogIn'>
          <input type='text' placeholder='appear'/>
        </div>
        <div className='inputLogIn'>
          <input type='text' placeholder='lifeStyle'/>
        </div>
        <div className='inputLogIn'>
          <input type='text' placeholder='animals'/>
        </div>

        <div className='inputLogIn'>
          <input type='text' placeholder='body'/>
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
