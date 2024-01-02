import React from 'react';
import { Link } from 'react-scroll';
// imagenes
import Image from '../assets/avatar.svg';
// icons
import { FaYoutube, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'
//motion
import { motion } from 'framer-motion'
// variantes
import { fadeIn } from '../variants';
import '../index.css';


const Banner = () => {
  return (
    <section 
    className='min-h-[85vh] lg:min-h-[78vh] flex items-center' 
    id='banner'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 mt-12 lg:flex-row lg:items-center lg:gap-x-12'>
          {/* texto */}
          <div className='flex-1 text-center font-secondary lg:text-left'>

            <motion.h1 
            variants={fadeIn('up',0.3)} 
            initial="hidden" 
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='text-[55px] font-bold leading-[0.8] lg:text-[90px]'>
              UP! AGENCY
            </motion.h1>

            <motion.div
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='my-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='text-white mr-2'>
                Una empresa que
              </span>
              <span className='animate-pulse text-secondary'>
                Suma
              </span>
            </motion.div>

            <motion.p
              variants={fadeIn('up', 0.5)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-8 max-w-lg mx-auto lg:mx-0'>
              Ideamos e implementamos soluciones integrales de medios que generan
              resultados que aportan valor real a cada marca.
            </motion.p>

            <motion.div
              variants={fadeIn('up', 0.6)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <Link to='contacto'
              activeclass='active'
              smooth={true}
              spy={true}
              offset={-10}
              >
                <button className='btn btn-lg text-primary text-lg'>Contáctenos</button>
              </Link>
            </motion.div>

            {/* redes sociales */}

            <motion.div 
             variants={fadeIn('up',0.7)} 
             initial="hidden" 
             whileInView={'show'}
             viewport={{ once: false, amount: 0.7 }}
            className='flex text-[28px] gap-x-6 max-w-max mx-auto lg:mx-2'>
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
            </motion.div>

          </div>

          {/* imagen */}

          <motion.div 
           variants={fadeIn('left',0.3)} 
           initial="hidden" 
           whileInView={'show'}
           className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
            <img src={Image} alt='imagen soluciones integrales' />
          </motion.div>
        </div>
      </div>

    </section>

  );
};

export default Banner;
