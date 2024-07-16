import './HabitatPage.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import HabitatDisplay from './HabitatsDisplay/HabitatsDisplay';

function HabitatPage() {
  



  return (
    <div className="App">
      <Navbar />
      <Header/>
      <HabitatDisplay/>
      <Footer/>
    </div>
  );
}

export default HabitatPage;