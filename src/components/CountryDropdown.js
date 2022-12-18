import React, { useState, useEffect, useContext } from 'react';

import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

// imoirt headless ut

import { Menu } from '@headlessui/react';

// import housecontext

import { HouseContext } from './HouseContext';



const CountryDropdown = () => {

  const { country, setCountry, countries } = useContext(HouseContext);

  //console.log(countries);


  const [isOpen, setIsOpen] = useState(false);

  return <Menu as='div' className=" dropdown relative">
    <Menu.Button onClick={() => setIsOpen(!isOpen)} className="dropdown-btn w-full text-left">
      <RiMapPinLine className='dropdown-icon-primary' />
      <div>
        <div className='text-[15px] font-medium leading-tight'>{country}</div>
        <div className='text-[13px]'>Select Your prefered place</div>
      </div>
      {
        isOpen ? (
          <RiArrowUpSLine className='dropdown-icon-secondary' />
        ) : (
          <RiArrowDownSLine className='dropdown-icon-secondary' />
        )
      }
    </Menu.Button>


    <Menu.Items className="dropdown-menu">
      {countries.map((country, index) => {
        return (
          <Menu.Item
            onClick={() => setCountry(country)}
            className="cursor-pointer hover:text-blue-700 transition" as="li" key={index}>{country}</Menu.Item>
        )
      })}
    </Menu.Items>

  </Menu>;
};

export default CountryDropdown;
