import React from 'react';
// contador
import Countup from 'react-countup';
// Interseccion hook
import { useInView } from 'react-intersection-observer';
// motion
import { motion } from 'framer-motion';
// variantes
import { fadeIn } from '../variants';
//icono
import { FcCheckmark } from "react-icons/fc";
// imagen
import Image from '../assets/aboutUp.png';


const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20
        lg:gap-y-0 h-screen'>
          {/* imagen */}
          <motion.div 
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.3}}
          className='flex-1 h-[640px] 
        mix-blend-lighten'>
          
          <h2 className='h2 text-secondary'>Acerca de nosotros</h2>
            <h3 className='h3 mb-4'>
              UP! Agency es una empresa de servicios integrales con años de
              trayectoria en el mercado.
            </h3>
             {/* imagen */}
           <motion.div 
           variants={fadeIn('left',0.3)} 
           initial="hidden" 
           whileInView={'show'}
           className=' max-w-[482px] lg:max-w-[482px]'>
            <img src={Image} alt='imagen acerca de nosotros' />
          </motion.div>
        </motion.div>
          {/* texto */}
          <motion.div 
           variants={fadeIn('left', 0.5)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once: false, amount: 0.3}}
          className='flex-1'>
           {/*  <h2 className='h2 text-secondary'>Acerca de nosotros</h2>
            <h3 className='h3 mb-4'>
              UP! Agency es una empresa de servicios integrales con años de
              trayectoria en el mercado.
            </h3> */}
            <p>
              Somos especialistas en asesorar a nuestros clientes,
              maximizando su potencial para lograr el objetivo. El exito es nuestra meta.
            </p>
            <p className='mb-6'>
              Nuestros productos tienen el respaldo de un gran equipo de especialistas
              en medios y eventos exclusivos.
            </p>
            {/* items */}
            <div className='flex flex-col gap-y-4 lg:gap-y-10 mb-12'>
              <div className=' mb-2 flex items-center'>
               <FcCheckmark className='w-[30px] text-gradient' /> <h2 className='ml-2 font-primary text-sm tracking-[2px]'>Contratación de artistas </h2>
              </div>
              <div className=' mb-2 flex items-center'>
               <FcCheckmark className='w-[30px] text-gradient' /> <h2 className='ml-2 font-primary text-sm tracking-[2px]'>Comercializacion de medios </h2>
              </div>
              <div className=' mb-2 flex items-center'>
               <FcCheckmark className='w-[30px] text-gradient' /> <h2 className='ml-2 font-primary text-sm tracking-[2px]'>Planificacion de medios </h2>
              </div>
              <div className=' mb-2 flex items-center'>
               <FcCheckmark className='w-[30px] text-gradient' /> <h2 className='ml-2 font-primary text-sm tracking-[2px]'>Eventos especiales, desfiles y promociones </h2>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
