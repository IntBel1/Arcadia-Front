
import './ListReview.css';

import Navbar from '../../zooAnimalPage/Navbar/Navbar';

const ListReview = () => {
return (
     
        <div className='DashPage'>
      <Navbar />
      <form className='DashInfor' >
        <h2>Animals consultation</h2>
    
        <table>
                <tr>
                <th>#</th>
                <th>Name</th>
                <th>Reviews </th>
                <th colspan="2">Actions</th>
            </tr>
            <tr>
                <td>Donnée 1</td>
                <td>Donnée 2</td>
                
                <td><button>Add</button></td>
                <td><button>Delete</button></td>
              
                
            </tr>
            
        </table>
        
      </form>
    </div>
 
  );
}


export default ListReview;