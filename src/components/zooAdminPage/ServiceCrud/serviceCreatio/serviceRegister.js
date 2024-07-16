
import './serviceRegister.css';
import Navbar from '../../../zooAnimalPage/Navbar/Navbar'; 




const servreg = () => {
  

  return (
    <div className='loginPage'>
      <Navbar />
      <form className='loginInfor' >
        <h2>Create Service</h2>

        <div className='inputLogIn'>
          <input type='text' placeholder='Service Name'/>
        </div>

        <div className='inputLogIn'>
          <input type='text' placeholder='Descriptio of Service'/>
        </div>

        
        <label className="inputLogIn">Select Image :</label>
        <input type="file" id="fileInput" className="image" accept="image/*"/>
        <input type="submit" className="image1" value="Envoyer"/>


        
        <button type='submit'>Create</button>

        
      </form>
    </div>
  );
};

export default servreg;
