import s from './App.module.css'
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import OurService from './components/ourService/OurService';
import DevelopmentSteps from './components/developmentSteps/DevelopmentSteps';
function App() {
  return (
    <div className={s.app}>
      <Header/>
      <Hero/>
      <OurService/>
      <DevelopmentSteps/>
    </div>
  );
}

export default App;
