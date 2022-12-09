import React, { useState, useEffect, useContext } from 'react';

import { RiWallet3Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

// import headless ui

import { Menu } from '@headlessui/react';

// import housecontext

import { HouseContext } from './HouseContext';



const PriceRangeDropdown = () => {

  const { price, setPrice } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);


  const prices = [
    {
      value: "Price range (any)",
    },
    {
      value: "100000 - 120000",
    },
    {
      value: "120000 - 130000",
    },
    {
      value: "130000 - 160000",
    },
    {
      value: "160000 - 230000",
    },
    {
      value: "230000 - 350000",
    },
    {
      value: "350000 - 550000",
    },
    {
      value: "550000 - 650000",
    },
    {
      value: "650000 - 700000",
    },
  ]



  return <Menu as='div' className=" dropdown relative">
    <Menu.Button onClick={() => setIsOpen(!isOpen)} className="dropdown-btn w-full text-left">
      <RiWallet3Line className='dropdown-icon-primary' />
      <div>
        <div className='text-[15px] font-medium leading-tight'>{price}</div>
        <div className='text-[13px]'>Choose your price range</div>
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
      {prices.map((price, index) => {
        return (
          <Menu.Item
            onClick={() => setPrice(price.value)}
            className="cursor-pointer hover:text-blue-700 transition" as="li" key={index}>{price.value}</Menu.Item>
        )
      })}
    </Menu.Items>

  </Menu>;
};

export default PriceRangeDropdown;

















