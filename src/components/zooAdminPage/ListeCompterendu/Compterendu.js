
import './Compterendu.css';

import Navbar from '../../zooAnimalPage/Navbar/Navbar';

const Compterendu = () => {
return (
     
        <div className='DashPage'>
      <Navbar />
      <form className='DashInfor' >
        <h2>The proceedings of the 
        veterinary</h2>
    
        <table>
                <tr>
                <th>#</th>
                <th>Animal</th>
                <th>Reviews </th>
                <th colspan="2">Actions</th>
            </tr>
            <tr>
                <td>Donnée 1</td>
                <td>Donnée 2</td>
                <td>Donnée 3</td>
              
                <td><button>Modify</button></td>
                <td><button>Delete</button></td>
            </tr>
            
        </table>
        
      </form>
    </div>
 
  );
}


export default Compterendu;