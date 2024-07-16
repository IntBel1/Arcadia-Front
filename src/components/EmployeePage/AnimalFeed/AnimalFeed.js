
import './AnimalFeed.css';

import Navbar from '../../zooAnimalPage/Navbar/Navbar';

const AnimalFeed = () => {
return (
     
        <div className='DashPage'>
      <Navbar />
        <div className='RegisterDetail'>
          <h2>Animal Feeding</h2>
        
    
          <div className='RegisterInfo'>
            
          <label htmlFor="animal">Select an Animal:</label>
          <select id="animal">
          <option value="employee">hayawen1</option>
            <option value="veterinarian">hayawan2</option>
           </select>
           
          
    
          <form className='RegisterInfo'>
         <div>
        <label htmlFor="date">Date:</label>
        <input type="date"id="date"/>
        </div>
        <div>
        <label htmlFor="time">Time:</label>
        <input type="time"id="time"/>
        </div>
        <div>
        <label htmlFor="food">Food:</label>
        <input type="text"id="food"/>
        </div>
        <div>
        <label htmlFor="quantity">Quantity:</label>
        <input type="number"id="quantity"/>
        </div>
        <button type="submit">Add Feeding</button>
        </form>
        
          
          
          <div className='RegisterInfo'>
            <h2>Feeding Log</h2>
            <ul>
                <li>
                  <output>date</output><br/>
                  <output>time</output><br/>
                  <output>quantity</output><br/>
                  <output>food</output> 
                </li>
             
            </ul>
          </div>
          
          </div>
          </div>
        </div>
    
 
  );
}


export default AnimalFeed;