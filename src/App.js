import './App.css';
import AboutMe from './container/AboutMe/AboutMe';
import Contact from './container/ContactMe/Contact';
import Exp from './container/Experience/Exp';
import Footer from './container/Footer/Footer';
import Home from './container/Home/home';
import Resume from './container/Resume/Resume';


function App() {
  return (
    <div className="App">
      <Home/>
      <AboutMe/>
      <Resume/>
      <Exp/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
