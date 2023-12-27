import React from 'react';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
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

/* const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}; */

const App = () => {
  return (
    <Router>
      <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
        <Header />
        <Nav />
        <Banner />
        <About />
        <Services />
        <Work />
        <Contact />
        <Footer />
     
        
       {/*  <Routes>
          <Route path="/home" element={<Banner />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/footer" element={<Footer />} />
        </Routes> */}
        <Routes>
          <Route path="/grafica" element={<Grafica />} />
        </Routes>
       </div>
    </Router>
  );
};

export default App;
