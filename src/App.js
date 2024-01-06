import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Grafica from './components/Grafica';
import Home from './components/Home';
import Artistas from './components/Artistas';

const App = () => {
  return (
    <Router>
      <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
        <Nav />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artistas" element={<Artistas />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

/* const App = () => {
  return (
    <Router>
      <div className='bg-site bg-no-repeat bg-cover overflow-hidden'> */
  

        

      /*   <Nav />
        <Header />
        <Routes>
        
          <Route path="home" element={<Home />} />
          <Route path="sevices/:grafica" element={<Grafica />} /> */
        /*  {/*  <Route path="banner" element={<Banner />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          
          <Route path="work" element={<Work />} />
          <Route path="contact" element={<Contact />} />
          <Route path="footer" element={<Footer />} />
          
      /*   </Routes>
        <Routes>
          <Route path="grafica" element={<Grafica />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
 */