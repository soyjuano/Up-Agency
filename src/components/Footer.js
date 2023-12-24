import React from 'react';
// icons
import { FaYoutube, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
       
        <div className="w-full h-auto p-5 flex-1 justify-center items-center bg-black/20">
          
          {/* REDES SOCIALES */}

              <div
                className='flex text-[25px] gap-x-6 max-w-max mx-auto pb-3'>
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
          
          <div className="flex-col justify-center items-center z-20 text-white text-center">
            Copyright © 2024 UP! AGENCY - Todos los Derechos Reservados - Desarrollado por Juano
  
          </div>
          
        </div>
    
    );
  };
  
  export default Footer;