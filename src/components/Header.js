import React from 'react';
// imagenes
import Logo from '../assets/logo.svg';

const Header = () => {
  return <header className='pt-8'>
    <div className='container mx-auto'>
      <div className='mt-4 w-auto hidden sm:hidden md:hidden lg:inline xl:inline'>
        {/*   logo */}
        <a href='#'>
          <img src={Logo} alt='logo'
            className='max-w-full h-auto min-w-[100px]'
          />
        </a>
      </div>

    </div>

  </header>;
};

export default Header;
