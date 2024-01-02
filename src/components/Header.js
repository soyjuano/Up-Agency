import React from 'react';
// imagenes
import Logo from '../assets/logo.svg';
import { Link as LinkRouter } from 'react-router-dom';

const Header = () => {
  return <header className='pt-10' id='inicio'>
    <div className='container mx-auto'>
      <div className='w-auto max-w-full min-h-20 min-w-[100px]'>
        
        {/*   logo */}
        <LinkRouter to='/'>
          <img src={Logo} alt='logo'
            className=' hidden lg:inline xl:inline lg:h-28'
          />
        </LinkRouter>
      </div>
    </div>
  </header>;
};

export default Header;
