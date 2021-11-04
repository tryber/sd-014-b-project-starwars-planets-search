import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import MyContext from '../MyContext';

export default function DataProvider({ children }) {
  const [data, setData] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [filterByNumericValues, setFilterByNumericValues] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

  const contextValue = {
    data,
    setData,
    filterByName,
    setFilterByName,
    filterByNumericValues,
    setFilterByNumericValues,
  };
  useEffect(() => {
    const fetchData = async () => {
      const { results } = await fetch(url).then((response) => response.json());
      setData(results);
    };
    fetchData();
  }, []);
  return (
    <MyContext.Provider value={ { contextValue } }>
      {children}
    </MyContext.Provider>
  );
}

DataProvider.propTypes = {
  children: PropTypes.any,
}.isRequired;
