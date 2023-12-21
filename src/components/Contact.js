import React from 'react';
//motion
import { motion } from 'framer-motion'
// varientes
import { fadeIn } from '../variants';


const Contact = () => {
  return (
  <section className='py-16 lg:section' id='contact'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        {/* texto */}
        <motion.div 
        variants={fadeIn('right', 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.3}}
        className='flex-1 flex justify-center lg:justify-start items-center'>
          <div>
            <h4 className='text-xl text-center lg:text-start uppercase text-secondary font-medium mb-2 
            tracking-wide'>Contáctenos</h4>
            <h2 className='text-[45px] text-center lg:text-start lg:text-[90px] leading-none mb-12'>
              Esperamos <br />su Consulta!
            </h2>
          </div>
        </motion.div>
        {/* formulario */}
        <motion.form 
         variants={fadeIn('left', 0.3)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once: false, amount: 0.3}}
        className='flex-1 border-2 border-accent rounded-2xl flex flex-col gap-y-6 
        pb-16 p-6 items-start'>
          <input 
          className='bg-transparent border-b py-3 outline-none w-full
          placeholder:text-white focus:border-cyan-500 transition-all'
          type='text'
          placeholder='Su nombre'
          />
            <input 
          className='bg-transparent border-b py-3 outline-none w-full
          placeholder:text-white focus:border-cyan-500 transition-all'
          type='text'
          placeholder='Su email'
          />
          <textarea className='bg-transparent border-b py-12 outline-none w-full
          placeholder:text-white focus:border-cyan-500 transition-all 
          resize-none mb-12' 
          placeholder='Su mensaje'
          ></textarea>
          <button className='btn btn-lg text-primary font-extrabold'>Enviar</button>
        </motion.form>
      </div>
    </div>
  
  </section>
  );
};

export default Contact;
