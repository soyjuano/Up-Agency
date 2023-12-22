import React from 'react';
// import icons
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquareText } from 'react-icons/bs';
// link
import { Link } from 'react-scroll';
import Logo from '../assets/logo.svg';

const Nav = () => {
  return (

    <nav className='fixed top-2 lg:top-8 w-full overflow-hidden z-50'>  {/* POSICION DE MENU */}

      <div className='container px-[2px] mx-auto flex justify-between items-center'>
        <div className=' mt-1 w-40 hidden'>

          {/*   logo */}
          <a href='#'>
            <img
              src={Logo}
              alt='logo'
              className=' sm:inline md:inline max-w-full h-auto min-w-[35px]'
            />
          </a>
        </div>

        <div className='container mx-auto'>



          {/* nav inner */}
          <div className='w-full bg-black/20 h-[86px] backdrop-blur-2xl rounded-full max-w-[450px] mx-auto px-2 flex justify-between items-center text-2xl text-white/50'>

            <div className=' mt-1 w-30 px-4'>

              {/*   logo */}
              <a href='#'>
                <img
                  src={Logo}
                  alt='logo'
                  className=' sm:inline md:inline max-w-full h-auto min-w-[25px]'
                />
              </a>
            </div>


            <Link
              to='home'
              activeClass='active'
              smooth={true}
              spy={true}
              offset={-200}
              className='cursor-pointer w-[50px] h-[50px] flex items-center justify-center'>
              <BiHomeAlt />
            </Link>
            <Link
              to='about'
              activeClass='active'
              smooth={true}
              spy={true}
              offset={-70}
              className='cursor-pointer w-[50px] h-[50px] flex items-center justify-center'>
              <BiUser />
            </Link>
            <Link
              to='services'
              activeClass='active'
              smooth={true}
              spy={true}
              offset={-70}
              className='cursor-pointer w-[50px] h-[50px] flex items-center justify-center'>
              <BsClipboardData />
            </Link>
            <Link
              to='work'
              activeClass='active'
              smooth={true}
              spy={true}
              offset={-50}
              className='cursor-pointer w-[50px] h-[50px] flex items-center justify-center'>
              <BsBriefcase />
            </Link>
            <Link
              to='contact'
              activeClass='active'
              smooth={true}
              spy={true}
              offset={-10}
              className='cursor-pointer w-[50px] h-[50px] flex items-center justify-center'>
              <BsChatSquareText />
            </Link>
          </div>
        </div>
      </div>


    </nav>
  );
};

export default Nav;
