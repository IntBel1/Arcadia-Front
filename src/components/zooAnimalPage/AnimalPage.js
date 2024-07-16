import './AnimalPage.css';

import Header from './Header/Header';
import AdminDisplay from './AnimalDisplay/AnimalDisplay';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';

function AnimalPage() {
  

  return (
    <div className="App">

      <Navbar />
      <Header/>
      <AdminDisplay/>
      <Footer/>
    </div>
  );
}

export default AnimalPage;