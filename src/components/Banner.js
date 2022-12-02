import React from 'react';
// import image 

import image from '../assets/img/house-banner.png';

import Search from '../components/Search';


const Banner = () => {
  return <section className='h-full nmax-h-[640px] mb-8 xl:mb-24'>
    <div className='flex flex-col lg:flex-row'>
      <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
        <h1 className='text-4xl  lg:text-[58px] font-semibold leading-none mb-6'>
          <span className='text-blue-700'>Rent</span> Your dream Home With Us
        </h1>
        <p className='max-w-[480px] mb-8'>We offer the best house listing avaliable in your area, With incredible experince of 7 years severing the best clients and making them happy. Let us help you find the next happy home today.</p>
      </div>
      {/* image */}
      <div className='hidden flex-1 lg:flex justify-end items-end'>
        <img src={image} alt='' />
      </div>
    </div>
    <Search />
  </section>;
};

export default Banner;
