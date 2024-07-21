
import './dashboard.css';

import Navbar from '../../zooAnimalPage/Navbar/Navbar';
import { Table, Button } from 'react-bootstrap';



const dashPage = () => {
/*return (
     
        <div className='DashPage'>
      <Navbar />
      <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Image</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.title}</td>
                        <td>{item.description}</td>
                        <td>
                            <img src={item.image} alt={item.title} style={{ width: '100px', height: '100px' }} />
                        </td>
                        <td>
                            <Button variant="warning" onClick={() => onModify(item.id)}>
                                Modify
                            </Button>{' '}
                            <Button variant="danger" onClick={() => onDelete(item.id)}>
                                Delete
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    </div>
 
  );*/
}


export default dashPage;