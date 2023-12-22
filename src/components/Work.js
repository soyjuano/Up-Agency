import React from 'react';
// motion
import { motion } from 'framer-motion';
// variantes
import { fadeIn } from '../variants';
// imagenes
import Img1 from '../assets/mimi.jpg';
import Img2 from '../assets/Barbie-Velez.jpg';
import Img3 from '../assets/el-apache-ness.jpg';

const Work = () => {
  return (
    <section className='section' id='work'>
      <div className='container mx-auto mt-16 mb-20 lg:mt-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div 
           variants={fadeIn('right', 0.3)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once: false, amount: 0.3}}
          className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            {/* texto */}
            <div className='text-center lg:text-left'>
              <h2 className='h2 leading-tight text-secondary lg:mb-2 xl:mb-6'>
                Artistas <br />
                Exclusivos Up!
              </h2>
              <p className='min-w-sm xl:mb-16 mb-4 xl:text-[20px]'>
                Contamos con un variado portfolio de artistas, modelos, conductores
                y personalidades destacadas del mundo del espectáculo, la televisión
                y el cine.
              </p>
              <button className="btn btn-sm text-primary text-[20px]">+ Artistas</button>
            </div>
            
            {/* imagen Mimi*/}
            <div className='group relative overflow-hidden border-2 border-white/50 
            rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 
              transition-all duration-300'></div>
                {/* img */}
                <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt='' />
                {/* titulo */}
                <div className='absolute -bottom-full left-12 group-hover:bottom-24 
                transition-all duration-500 z-50'>
                 <span className='text-gradient text-3xl'>Mimi</span> 
                  </div>
                {/* subtitulo */}
                <div className='absolute -bottom-full left-12 group-hover:bottom-14 
                transition-all duration-700 z-50'>
                  <span className='text-3xl text-white'>Panelista</span>
                </div>
              </div>

            </motion.div>
            <motion.div 
             variants={fadeIn('left', 0.2)}
             initial="hidden"
             whileInView={"show"}
             viewport={{once: false, amount: 0.3}}
            className='flex-1 flex flex-col gap-y-10'>
                 
                 {/* imagen Barbie Velez */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 
              transition-all duration-300'></div>
                {/* img */}
                <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt='' />
                {/* titulo */}
                <div className='absolute -bottom-full left-12 group-hover:bottom-24 
                transition-all duration-500 z-50'>
                 <span className='text-gradient text-3xl'>Barbie Velez</span> 
                  </div>
                {/* subtitulo */}
                <div className='absolute -bottom-full left-12 group-hover:bottom-14 
                transition-all duration-700 z-50'>
                  <span className='text-3xl text-white'>Modelo & Actriz</span>
                </div>
              </div>

                {/* imagen Apache Ness */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 
              transition-all duration-300'></div>
                {/* img */}
                <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt='' />
                {/* titulo */}
                <div className='absolute -bottom-full left-12 group-hover:bottom-24 
                transition-all duration-500 z-50'>
                 <span className='text-gradient text-3xl'>Apache Ness</span> 
                  </div>
                {/* subtitulo */}
                <div className='absolute -bottom-full left-12 group-hover:bottom-14 
                transition-all duration-700 z-50'>
                  <span className='text-3xl text-white'>Cantante</span>
                </div>
              </div>

            </motion.div>


          </div>
        </div>
      </section>
  );
};

export default Work;
