import React, { useRef } from 'react';
//motion
import { motion } from 'framer-motion'
// varientes
import { fadeIn } from '../variants';
// emails
import emailjs from '@emailjs/browser';
// iconos
import { FaMapMarkerAlt } from "react-icons/fa";
import { LuSmartphone } from "react-icons/lu";
import { MdEmail } from "react-icons/md";


export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vi3amoy', 'template_5gqntao',
      form.current, 'GbUbqfawogJQMMRcQ')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  };

  return (
    <section className='pt-16 lg:section' id='contact'>
      <div className='container mx-auto mt-20 mb-20 lg:mb-2'>
        <div className='flex flex-col lg:flex-row'>
          {/* texto */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex justify-center lg:justify-start items-center pb-10'>
            <div>
              <h4 className='text-xl text-center lg:text-start uppercase text-secondary font-medium mb-2 
            tracking-wide'>Contáctenos</h4>
              <h2 className='text-[45px] text-center lg:text-start lg:text-[90px] leading-none mb-4'>
                Esperamos <br />su Consulta!
              </h2>


              <div className='flex-1 flex flex-col gap-y-6 pb-2 justify-center lg:justify-start items-center lg:items-start text-xl'>
                <div className='flex items-center pt-2'>
                  <FaMapMarkerAlt />

                  <p className='ml-4 self-center'>Honduras 5550, 2º 201  <br className='lg:hidden xl:hidden' />C.A.B.A., Argentina</p>
                </div>
                <div className='flex items-center pt-2'>

                  <LuSmartphone />

                  <p className='ml-4 self-center'>+5411 4500 9822</p>
                </div>
                <div className='flex items-center pt-2'>

                  < MdEmail />

                  <p className='ml-4 self-center'>info@upagecy.net</p>
                </div>
              </div>
            </div>
            
          </motion.div>
          {/* formulario */}
          <motion.form
            ref={form} onSubmit={sendEmail}
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 border-2 border-accent rounded-2xl flex flex-col gap-y-6 
        pb-4 p-6 items-start'>
            <input
              className='bg-transparent border-b py-3 outline-none w-full text-xl 
          placeholder:text-white/50 focus:border-cyan-500 transition-all'
              type='text'
              placeholder='Su nombre'
              name='from_name'
              required
            />
            <input
              className='bg-transparent border-b py-3 outline-none w-full text-xl 
          placeholder:text-white/50 focus:border-cyan-500 transition-all'
              type='email'
              placeholder='Su email'
              name='from_email'
              required
            />
            <input
              className='bg-transparent border-b py-3 outline-none w-full text-xl
          placeholder:text-white/50 focus:border-cyan-500 transition-all'
              type='text'
              placeholder='Asunto'
              name='subject'
              required
            />
            <textarea className='bg-transparent border-b py-12 outline-none w-full text-xl  
          placeholder:text-white/50 focus:border-cyan-500 transition-all 
          resize-none mb-8'
              placeholder='Su mensaje'
              name='message'
              required
            ></textarea>
            <button type='submit' className='btn btn-lg text-primary text-xl font-extrabold'>Enviar</button>
          </motion.form>
        </div>
      </div>

    </section>
  );
};

export default Contact;
