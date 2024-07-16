import './HomePage.css';

import Features from './Feature/Features';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import New from './New/New';
import HomeSlider from './HomeSlider/HomeSlider';
import Avis from './Avis/Avis';

function HomePage() {
  

  
  return (
    <div >
      <Header  />
      <Features />
      <HomeSlider/>
      <New />
      <Avis/>
      <Footer />
    </div>
  );
}

export default HomePage;
