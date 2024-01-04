import React from 'react';
import { Link as LinkScroll } from 'react-scroll';
import { Link as LinkRouter} from 'react-router-dom';
// iconos
import { BsArrowUpRight, BsShare, BsTv, BsGraphUpArrow, BsBroadcastPin, BsImages,  BsPersonHeart} from 'react-icons/bs';
//motion
import { motion } from 'framer-motion';
//variantes
import { fadeIn } from '../variants';

// datos de servicios
const services = [
{
  name: 'Gráfica' ,
  description:
  'Servicios integrales para destacar tu marca.',
 link: 'Más info',
 url: 'grafica',
 icon: <BsGraphUpArrow/>,
},
{
  name: 'Rádio' ,
  description:
  'Estrategias efectivas para llegar a tu audiencia.',
 link: 'Más info',
 url: 'radio',
 icon: <BsBroadcastPin/>,
},
{
  name: 'Redes Sociales' ,
  description:
  'Impulsa tu presencia en redes con UP AGENCY.',
 link: 'Más info',
 url: 'radio',
 icon: <BsShare/>,
},
{
  name: 'TV' ,
  description:
  'Promociones televisivas que elevan tu presencia.',
 link: 'Más info',
 url: 'radio',
 icon: <BsTv/>,
},
{
  name: 'Vía Pública' ,
  description:
  'Capta la atención de tu audiencia en cada rincón.',
 link: 'Más info',
 url: 'radio',
 icon: <BsImages/>,
},
{
  name: 'Eventos' ,
  description:
  'Mejora tus eventos contratando a nuestros artistas.',
 link: 'Más info',
 url: 'radio',
 icon: <BsPersonHeart/>,
},

];

const Services = () => {
  return (
  <section className='section' id='servicios'>
    <div className='container mx-auto pt-24 lg:pt-36'>
      <div className='flex flex-col lg:flex-row'>
        {/* texto e imagen*/}
        <motion.div 
         variants={fadeIn('right', 0.3)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once: false, amount: 0.3}}
        className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat 
        mix-blend-lighten lg:mb-0 text-center lg:text-left'>
          <h2 className='h2 text-secondary mb-6'>Medios que Abarcamos</h2>
          <h3 className='h3 mx-auto lg:mx-0 max-w-[455px] mb-6'>
          Publicidad integral para destacar en cada plataforma de difusión
          </h3>
          <button className='btn btn-sm text-primary font-tertiary text-[20px]'>Listado de Medios</button>
          </motion.div>
       
       <motion.div 
        variants={fadeIn('left', 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.3}}
       className='flex-1 m-4'>

         {/* lista de servicios*/}
        <div>
          {services.map((service, index)=> {
            // estructura servicio 
            const { name, description, link, url, icon } = service;
            return (
              <div className='border-b border-white/20 h-[110px] mb-[8px] flex'
                key={index}>
                <div className='max-w-[476px]'>
                  <h4 className='text-[20px] tracking-wider font-primary
                  font-semibold mb-6'>{name}</h4>
                  <p className='font-secondary font-light leading-tight'>
                    {description}
                  </p>
                </div>
                <div className='flex flex-col flex-1 pl-2 text-4xl text-accent flex justify-center items-end'>
                {icon}
                  {/* <LinkRouter to={url} className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                  {icon}
                  </LinkRouter>
                  <p  className='text-gradient text-sm'>
                    {link}
                  </p> */}
                </div>

              </div>
            );
          })}  
        </div>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default Services;
