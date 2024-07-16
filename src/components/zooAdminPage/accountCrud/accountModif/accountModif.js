
import './accountModif.css';
import Navbar from '../../../zooAnimalPage/Navbar/Navbar'; 




const ModifPage = () => {
  

  return (
    <div className='loginPage'>
      <Navbar />
      <form className='loginInfor' >
        <h2>Modify account</h2>

        <div className='inputLogIn'>
          <input type='text' placeholder='UserName'/>
        </div>

        <div className='inputLogIn'>
          <input type='text' placeholder='FirstName'/>
        </div>

        <div className='inputLogIn'>
          <input type='text' placeholder='LastName'/>
        </div>

        <div className='inputLogIn'>
          <input type='text' placeholder='Email'/>
        </div>

        <div className='inputLogIn'>
          <input type='password' placeholder='Password'  />
        </div>

        <label for="role">Role:</label>
            <select id="role" name="role">
            <option value="employee">Employee</option>
            <option value="veterinarian">Veterinarian</option>
        </select>
        
  
        <button type='submit'>Modify</button>

        
      </form>
    </div>
  );
};

export default ModifPage;
