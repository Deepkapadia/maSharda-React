import React,{useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { BrowserRouter as Router , Route } from 'react-router-dom';
import './App.css';
import { Header , Footer } from './components';
import { Home, EventContainer, EventDetails, OurWork, Contactus, AboutUs} from './container';

function App() {
  useEffect(()=> {
    Aos.init({duration:1500});
},[]);
  return (
    <div>
      <Router>
        
        <Header/>

          <Route path="/" exact>
            <Home/>
          </Route>

          <Route path="/about">
            <AboutUs/>
          </Route>

          <Route path="/events">
            <EventContainer/>
          </Route>

          <Route path="/single-event">
            <EventDetails/>
          </Route>

          <Route path="/ourwork">
            <OurWork/>
          </Route>

          <Route path="/contact">
            <Contactus/>
          </Route>

        {/* Footer Section */}
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
