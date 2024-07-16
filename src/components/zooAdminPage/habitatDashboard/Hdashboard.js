
import './Hdashboard.css';

import Navbar from '../../zooAnimalPage/Navbar/Navbar';

const Habitatdash = () => {
return (
     
        <div className='DashPage'>
      <Navbar />
      <form className='DashInfor' >
        <h2>Habitat Dashboard</h2>
    
        <table>
                <tr>
                <th>#</th>
                <th>Name</th>
                <th>Description</th>
                <th>ListAnimaux</th>
                <th colspan="2">Actions</th>
            </tr>
            <tr>
                <td>Donnée 1</td>
                <td>Donnée 2</td>
                <td>Donnée 3</td>
                <td>Donnée 4</td>
                <td><button>Modify</button></td>
                <td><button>Delete</button></td>
            </tr>
            
        </table>
        
      </form>
    </div>
 
  );
}


export default Habitatdash;