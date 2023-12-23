import React from 'react';
// iconos
import { BsArrowUpRight } from 'react-icons/bs';
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
},
{
  name: 'Rádio' ,
  description:
  'Estrategias efectivas para llegar a tu audiencia.',
 link: 'Más info',
},
{
  name: 'Redes Sociales' ,
  description:
  'Impulsa tu presencia en redes con UP AGENCY.',
 link: 'Más info',
},
{
  name: 'TV' ,
  description:
  'Promociones televisivas que elevan tu presencia.',
 link: 'Más info',
},
{
  name: 'Vía Pública' ,
  description:
  'Capta la atención de tu audiencia en cada rincón.',
 link: 'Más info',
},
{
  name: 'Eventos' ,
  description:
  'Mejora tus eventos contratando a nuestros artistas.',
 link: 'Más info',
},

];

const Services = () => {
  return (
  <section className='section' id='services'>
    <div className='container mx-auto mt-10'>
      <div className='flex flex-col lg:flex-row'>
        {/* texto e imagen*/}
        <motion.div 
         variants={fadeIn('right', 0.3)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once: false, amount: 0.3}}
        className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat 
        mix-blend-lighten mb-12 lg:mb-0 text-center lg:text-left'>
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
       className='flex-1'>

         {/* lista de servicios*/}
        <div>
          {services.map((service, index)=> {
            // estructura servicio 
            const { name, description, link } = service;
            return (
              <div className='border-b border-white/20 h-[110px] mb-[8px] flex' 
              key={index}>
                <div className='max-w-[476px]'>
                  <h4 className='text-[20px] tracking-wider font-primary
                  font-semibold mb-6'>{name}</h4>
                  <p className='font-secondary leading-tight'>
                    {description} 
                    </p>
                  </div>
                <div className='flex flex-col flex-1 items-end'>
                  <a href='#' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                    <BsArrowUpRight className='text-primary'/>
                  </a>
                  <a href='#' className='text-gradient text-sm'>
                    {link}
                    </a>
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
