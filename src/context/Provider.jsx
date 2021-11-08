import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import MyContext from './MyContext';

export default function Provider({ children }) {
  const [data, setData] = useState([]);
  const [searchInput, updateSearchInput] = useState('');

  const contextValue = {
    data,
    filters: {
      filterByName: {
        name: searchInput,
      },
    },
    updateSearchInput,
  };

  useEffect(() => {
    const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const APIfetch = async () => {
      const fetchAPI = await fetch(URL);
      const response = await fetchAPI.json();
      setData(response.results);
    };
    APIfetch();
  }, []);

  return (
    <MyContext.Provider value={ contextValue }>
      { children }
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
