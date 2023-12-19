import React from 'react';
// iconos
import { BsArrowUpRight } from 'react-icons/bs';
//motion
import { motion } from 'framer-motion';
//variantes
import { fadeIn } from '../variants';

// service data
const services = [
{
  name: 'Gráfica' ,
  description:
  'Servicios integrales de gráfica para destacar tu marca.',
 link: 'Más info',
},
{
  name: 'Rádio' ,
  description:
  'Estrategias efectivas para destacar y llegar a tu audiencia.',
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
  'Promociones televisivas que cautivan y elevan tu presencia.',
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
  'Eleva tus eventos con nuestro servicio de contratación exclusiva.',
 link: 'Más info',
},

];

const Services = () => {
  return (
  <section className='section' id='services'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        {/* texto e imagen*/}
        <div className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat 
        mix-blend-lighten mb-12 lg:mb-0'>
          <h2 className='h2 text-secondary mb-6'>Medios que Abarcamos</h2>
          <h3 className='h3 max-w-[455px] mb-16'>
          Publicidad integral y promoción 
          estratégica para destacar en cada plataforma de difusión
          </h3>
          <button className='btn btn-sm'>Listado de Medios</button>
          </div>
       
       <div className='flex-1'>

         {/* lista de servicios*/}
        <div>
          {services.map((service, index)=> {
            // estructura servicio 
            const { name, description, link } = service;
            return (
              <div className='border-b border-white/20 h-[90px] mb-[8px] flex' 
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
                    <BsArrowUpRight />
                  </a>
                  <a href='#' className='text-gradient text-sm'>
                    {link}
                    </a>
                </div>

              </div>
            );
          })}  
        </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Services;
