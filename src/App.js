import s from './App.module.css'
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import OurService from './components/ourService/OurService';
import DevelopmentSteps from './components/developmentSteps/DevelopmentSteps';
import ShopExamples from './components/shopExamples/ShopExamples';
import MoreInfo from './components/moreInfo/MoreInfo';
import ContactForm from './components/contactForm/ContactFrom';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div className={s.app}>
      <Header/>
      <Hero/>
      <OurService/>
      <DevelopmentSteps/>
      <ShopExamples/>
      <MoreInfo/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}

export default App;
