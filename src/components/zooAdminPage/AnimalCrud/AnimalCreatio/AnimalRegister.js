
import './AnimalRegister.css';
import Navbar from '../../../zooAnimalPage/Navbar/Navbar'; 




const animalreg = () => {
  

  return (
    <div className='loginPage'>
      <Navbar />
      <form className='loginInfor' >
        <h2>Create Animal</h2>

        <div className='inputLogIn'>
          <input type='text' id="title" name="title" placeholder='title'/>
        </div>

        <div className='inputLogIn'>
          <input type='text' id="name" name="name" placeholder='name'/>
        </div>
        <div className='inputLogIn'>
          <input type='text' id="habitat" name="habitat" placeholder='habitat'/>
        </div>
        <div className='inputLogIn'>
          <input type='text' id="lifestyle" name="lifestyle" placeholder='lifeStyle'/>
        </div>
        <div className='inputLogIn'>
          <input type='text' id="breed" name="breed" placeholder='breed'/>
        </div>
        <label className="inputLogIn">url :</label>
        <input type="file" id="image" name="image" className="image" accept="image/*"/>
        <input type="submit" className="image1" value="Envoyer"/>


        
        <button type='submit'>Create</button>

        
      </form>
    </div>
  );
};

export default animalreg;
