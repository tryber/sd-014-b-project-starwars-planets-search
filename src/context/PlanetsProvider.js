import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filtersName, setFiltersName] = useState('');

  const contextValue = {
    data,
    filtersName,
    setFiltersName,
  };

  useEffect(() => {
    async function fetchAPI() {
      const planets = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const { results } = await planets.json();
      results.filter((result) => delete result.residents);
      setData(results);
    }
    fetchAPI();
  }, []);

  return (
    <PlanetsContext.Provider value={ { contextValue } }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
