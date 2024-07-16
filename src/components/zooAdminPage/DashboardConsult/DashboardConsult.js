
import './DashboardConsult.css';

import Navbar from '../../zooAnimalPage/Navbar/Navbar';

const Compterendu = () => {
return (
     
        <div className='DashPage'>
      <Navbar />
      <form className='DashInfor' >
        <h2>Animals consultation</h2>
    
        <table>
                <tr>
                <th>#</th>
                <th>Animal</th>
                <th>Reviews </th>
                
            </tr>
            <tr>
                <td>Donnée 1</td>
                <td>Donnée 2</td>
                <td><output>Donnée 3</output></td>
              
                
            </tr>
            
        </table>
        
      </form>
    </div>
 
  );
}


export default Compterendu;