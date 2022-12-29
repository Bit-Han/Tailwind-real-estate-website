import React, { useState, useEffect, createContext } from 'react';


// import data

import { housesData } from '../data';

// create Context
export const HouseContext = createContext();


const HouseContextProvider = ({ children }) => {

  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState('Location(any)');
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState('Property(any)');
  const [properties, setProperties] = useState([])
  const [price, setPrice] = useState('Price range(any)');
  const [loading, setLoading] = useState(false);

  // return of countries 


  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country;
    })
    // remove duplicates 
    const uniqueCountries = ["Location(any)", ... new Set(allCountries)]


    // set Countries state
    setCountries(uniqueCountries);

  }, [])



  // return all properties
  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    })
    // remove duplicates 
    const uniqueProperties = ["Property(any)", ... new Set(allProperties)]


    // set Properties state
    setProperties(uniqueProperties);

  }, [])

  const handleClick = () => {
    // set loading 
    setLoading(true);
    // create a functiion that checks if the string is included "any"

    const isDefault = (str) => {
      return str.split(' ').includes('(any)');
    }

    // get first value of the price and parse it to number
    const minPrice = parseInt(price.split(' ')[0]);
    // get second value of the price which is maximum and parse it to number
    const maxPrice = parseInt(price.split(' ')[2]);

    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);

      // if all values are selected 
      if (house.country === country && house.type === property && housePrice >= minPrice && housePrice <= maxPrice) {
        return house;
      }

      // if all values are default 
      if (isDefault(country) && isDefault(property) && isDefault(price)) {
        return house;
      }

      // if country is not default 
      if (!isDefault(country) && isDefault(property) && isDefault(price)) {

        return house.country === country
      }

      // if property is not default 
      if (!isDefault(property) && isDefault(country) && isDefault(price)) {
        return house.type === property
      }

      // if price is not default

      if (!isDefault(price) && isDefault(country) && isDefault(property)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house;
        }
      }

      // if  country and properties is not default
      if (!isDefault(country) && !isDefault(property) && isDefault(price)) {
        return house.country === country && house.type === property;
      }

      // if country and price is not deafult 
      if (!isDefault(country) && isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.country === country;
        }
      }

      // property and price is not default 

      if (isDefault(country) && !isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.type === property;
        }
      }
    });
    setTimeout(() => {
      return newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
        setLoading(false);
    }, 1000);
  };


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
    handleClick,
    loading,

  }}>{children}</HouseContext.Provider>
};

export default HouseContextProvider;
