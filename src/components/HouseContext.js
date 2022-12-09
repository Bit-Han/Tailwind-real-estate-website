import React, { useState, useEffect, createContext } from 'react';


// import data

import { housesData } from '../data';

// create Context
export const HouseContext = createContext();


const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState('Location (any)');
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState('Property (any)');
  const [properties, setProperties] = useState([])
  const [price, setPrice] = useState('Price range (any)');
  const [loading, setLoading] = useState(false);

  // return of contries 

  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country;
    })
    // remove duplicates 
    const uniqueCountries = ["Location (any)", ... new Set(allCountries)]


    // set Countries state
    setCountries(uniqueCountries);

  }, [])



  // return all properties
  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    })
    // remove duplicates 
    const uniqueProperties = ["Location (any)", ... new Set(allProperties)]


    // set Properties state
    setProperties(uniqueProperties);

  }, [])

  const handleClick = () => {
    console.log('fuck u')
  }


  return <HouseContext.Provider value={{
    country,
    setCountry,
    countries,
    setCountries,
    property,
    setProperty,
    properties,
    price,
    setPrice,
    houses,
    loading,
    handleClick

  }}>{children}</HouseContext.Provider>
};

export default HouseContextProvider;
