
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/zooHomePage/HomePage';
import AnimalsDetail from './components/zooAnimalsDetail/AnimalsDetail';
import AnimalPage from './components/zooAnimalPage/AnimalPage';
import LogInPage from './components/zooLogInPage/LogInPage';
import RegisterPage from './components/zooLogInPage/RegisterPage';
import ZooAccountPage from './components/zooLogInPage/ZooAccountPage';
import Habitatpage from './components/zooHabitatsPage/HabitatPage';
import Servicepage from './components/zooServicesPage/ServicePage';
import Contactpage from './components/zooContactPage/ContactPage';
import Dashpage from './components/zooAdminPage/memberDashboard/dashboard';
import Servicedash from './components/zooAdminPage/serviceDashboard/Sdashboard';
import AnimalDash from './components/zooAdminPage/AnDashboard/Andashboard';
import HDashboard from './components/zooAdminPage/habitatDashboard/Hdashboard';
import Registeraccount from './components/zooAdminPage/accountCrud/accountRegister/accountRegister';
import Modifaccount from './components/zooAdminPage/accountCrud/accountModif/accountModif';
import SeRegister from './components/zooAdminPage/ServiceCrud/serviceCreatio/serviceRegister';
import SeModif from './components/zooAdminPage/ServiceCrud/serviceModif/serviceModif';
import AnModif from './components/zooAdminPage/AnimalCrud/AnimalModif/AnimalModif';
import AnRegister from './components/zooAdminPage/AnimalCrud/AnimalCreatio/AnimalRegister';
import HabModif from './components/zooAdminPage/HabitatCrud/HabitatModif/HabitatModif';
import HabRegister from './components/zooAdminPage/HabitatCrud/HabitatCreatio/HabitatRegister';
import Lreveterinary from './components/zooAdminPage//ListeCompterendu/Compterendu';
import Rev from './components/EmployeePage/ListReview/ListReview';
import Feed from './components/EmployeePage/AnimalFeed/AnimalFeed';
import DConsult from './components/zooAdminPage/DashboardConsult/DashboardConsult';
import Vreport from './components//Veterinary/VeterinaryPage/VeterinaryReport';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/animals" element={<AnimalPage />} />
      <Route path="/animals/:id" element={<AnimalsDetail />} />
      <Route path="/logins" element={<LogInPage/>} />
      <Route path="/Dash" element={<Dashpage/>} />
      <Route path="/SDash" element={<Servicedash/>} />
      <Route path="/ADash" element={<AnimalDash/>} />
      <Route path="/HDash" element={<HDashboard/>} />
      <Route path="/accountRegister" element={<Registeraccount/>} />
      <Route path="/MoAccount" element={<Modifaccount/>} />
      <Route path="/Sregister" element={<SeRegister/>} />
      <Route path="/SModif" element={<SeModif/>} />
      <Route path="/AnModif" element={<AnModif/>} />
      <Route path="/AnRegister" element={<AnRegister/>} />
      <Route path="/HModif" element={<HabModif/>} />
      <Route path="/Hregister" element={<HabRegister/>} />
      <Route path="/ListeRevLreveterinary" element={<Lreveterinary/>} />
      <Route path="/Rev" element={<Rev/>} />
      <Route path="/DConsult" element={<DConsult/>} />
      <Route path="/AFeed" element={<Feed/>} />
      <Route path="/Veterinary" element={<Vreport/>} />
      <Route path="/services" element={<Servicepage/>} />
      <Route path="/contact" element={<Contactpage/>} />
      <Route path="/habitats" element={<Habitatpage/>} />
      <Route path="/logins/register" element={<RegisterPage/>} />
      <Route path="/account" element={<ZooAccountPage/>} />

    </Routes>
  </BrowserRouter>
);
}

export default App;
