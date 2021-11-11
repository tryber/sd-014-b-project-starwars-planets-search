import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import fetchApi from '../Services/fetchApi';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [inputFilter, setInputFilter] = useState(''); // Peguei a logica com o Nasser
  const [filters, setFilters] = useState({ filterByName: { name: '' } });

  const findPlanetsFromApi = async () => {
    const planets = await fetchApi();
    setData(planets);
  };

  useEffect(() => {
    findPlanetsFromApi();
  }, []);

  const contextValue = {
    data,
    filters,
    setFilters,
    inputFilter,
    setInputFilter,
  };

  return (
    <Context.Provider value={ contextValue }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
