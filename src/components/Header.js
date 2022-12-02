import React from 'react';

import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.svg';

// #5665d9

const Header = () => {
  return (
    <header className='py-6 mb-12 border-b'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link to='/'>
          <img src={Logo} alt='' />
        </Link>
        {/* Button */}
        <div className='flex items-center gap-6'>
          <Link className='hover:text-blue-900 transition' to=''>Log in</Link>
          <Link className='hover:bg-blue-800 bg-blue-700 text-white px-4 py-3 rounded-lg transition ' to=''>Sign up</Link>
        </div>
      </div>
    </header>)
};

export default Header;
