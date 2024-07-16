
import Navbar from '../../zooAnimalPage/Navbar/Navbar';
import './VeterinaryReport.css';

const Veterinary = () => {

  return (
    <div className="contactPage">
      <Navbar />
      <div  className="RegisterDetail">
        <h2>Veterinary Dashboard</h2>

        <div className="RegisterInfo">
        <label htmlFor="animal">Select an Animal:</label>
          <select id="animal">
          <option value="employee">Hayawen1</option>
            <option value="veterinarian">hayawan2</option>
           </select>

              <h1>Feeding Logs for </h1>
              <form >
                <label htmlFor="food">Food:</label>
                <input type="text" id="food" />
                <label htmlFor="quantity">Quantity:</label>
                <input type="number" id="quantity" />
                <button type="submit">Add Feeding</button>
              </form>
              <ul>
              <li>
                  <output>date</output><br/>
                  <output>time</output><br/>
                  <output>quantity</output><br/>
                  <output>food</output> 
                </li>
            
              </ul>
              
            </div>
            <div className="RegisterInfo1">
              <h1>Veterinarian Report for</h1>
              <form>
                <textarea id="report"placeholder={`Enter veterinarian report for `}></textarea>
                <button type="submit">Add Report</button>
              </form>
             
           
            </div>
        
      </div>
    </div>
  );
};

export default Veterinary;
