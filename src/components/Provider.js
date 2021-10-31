import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import MyContext from '../MyContext';

export default function DataProvider({ children }) {
  const [data, setData] = useState([]);
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

  useEffect(() => {
    const fetchData = async () => {
      const { results } = await fetch(url).then((response) => response.json());
      setData(results);
    };
    fetchData();
  }, []);
  return (
    <MyContext.Provider value={ { data } }>
      {children}
    </MyContext.Provider>
  );
}

DataProvider.propTypes = {
  children: PropTypes.any,
}.isRequired;
