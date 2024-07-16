
import './Andashboard.css';

import Navbar from '../../zooAnimalPage/Navbar/Navbar';

const dashPage = () => {
return (
     
        <div className='DashPage'>
      <Navbar />
      <form className='DashInfor' >
        <h2>Animal Dashboard</h2>
    
        <table>
                <tr>
                <th>#</th>
                <th>url</th>
                <th>Name</th>
                <th>title</th>
                <th>habitat</th>
                <th>lifeStyle</th>
                <th>breed</th>
                <th colspan="2">Actions</th>
            </tr>
            <tr>
                <td>Donnée 1</td>
                <td>Donnée 2</td>
                <td>Donnée 3</td>
                <td>Donnée 4</td>
                <td>Donnée 5</td>
                <td>Donnée 6</td>
                <td>Donnée 7</td>
                <td><button>Modify</button></td>
                <td><button>Delete</button></td>
            </tr>
            
        </table>
        
      </form>
    </div>
 
  );
}


export default dashPage;