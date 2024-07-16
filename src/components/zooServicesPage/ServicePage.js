import './ServicePage.css';
import Header from './Header/Header';
import ServicesDisplay from './ServicesDisplay/ServiceDisplay';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';

function ServicePage() {

  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <ServicesDisplay/>
      <Footer/>
    </div>
  );
}

export default ServicePage;