import React from 'react'

import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import Banner from './Banner';
import About from './About';
import Services from './Services';
import Work from './Work';
import Contact from './Contact';
import Footer from './Footer';


const Home = () => {
  return (

    <div id='home' className='bg-site bg-no-repeat bg-cover overflow-hidden'>

      <Banner />
      <About />
      <Services />
      <Work />
      <Contact />
      <Footer />



      {/* <LinkScroll
        to='banner'
        smooth={true}
        spy={true}
        offset={-200}
        duration={500}>
        <Banner /></LinkScroll>

      <LinkScroll
        to='about'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}>
        <About /></LinkScroll>

      <LinkScroll
        to='services'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}>
        <Services /></LinkScroll>

      <LinkScroll
        to='work'
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}>
        <Work /></LinkScroll>

      <LinkScroll to='contact'
        spy={true}
        smooth={true}
        offset={-10}
        duration={500}>
        <Contact /></LinkScroll>

      <LinkScroll
        to='footer'
        spy={true}
        smooth={true}
        offset={0}
        duration={500}>
        <Footer /></LinkScroll> */}

    </div>
  )
}

export default Home
