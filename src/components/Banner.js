import React from 'react';
// imagenes
import Image from '../assets/avatar.svg';
// icons
import { FaGithub, FaYoutube, FaDribbble, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'
// tipo de animacion
import { TypeAnimation } from 'react-type-animation';
import { CSSTransition } from 'react-transition-group';
//motion
import { motion } from 'framer-motion'
// variantes
import { fadeIn } from '../variants';
import '../index.css';


const Banner = () => {
  return (
    <section className='section' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          {/* texto */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <h1 className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
              Up Agency
            </h1>
            <div className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
             {/*  <span className='text-white mr-4'>Una empresa que</span> */}
              <CSSTransition
                in={true}
                timeout={500}
                classNames="fade"
                unmountOnExit
              >
                <span className='text-white mr-4'>
                  Una empresa que
                </span>
              </CSSTransition>

              <TypeAnimation
                sequence={[
                  'Suma',
                  2000,
                  'Mejora',
                  2000,
                  'Optimiza',
                  2000,
                ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </div>
            <p className='mb-8 max-w-lg mx-auto lg:mx-0'>
              Ideamos e implementamos soluciones integrales de medios que generan
              resultados que suman valor real a cada marca.
            </p>
            <div className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <button className='btn btn-lg'>Contáctenos</button>
            </div>
            {/* redes sociales */}
            <div className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href='https://www.youtube.com/channel/UCaZB702lcuvGm4hPmbOr3aA'>
                <FaYoutube />
              </a>
              <a href='https://twitter.com/upagencyar'>
                <FaTwitter />
              </a>
              <a href='https://www.facebook.com/Up-Agency-403483663385590/'>
                <FaFacebook />
              </a>
              <a href='https://www.instagram.com/upagencyar/'>
                <FaInstagram />
              </a>
            </div>
          </div>
          {/* imagen */}
          <div>
            <img src={Image} alt='' />
          </div>
        </div>
      </div>

    </section>

  );
};

export default Banner;
