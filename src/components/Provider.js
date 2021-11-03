import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import MyContext from '../MyContext';

export default function DataProvider({ children }) {
  const [data, setData] = useState([]);
  /*   const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: '',
        comparison: '',
        value: '',
      },
    ],
  }); */
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [filterByNumericValues, setFilterByNumericValues] = useState([{
    column: '',
    comparison: '',
    value: '',
  }]);
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
