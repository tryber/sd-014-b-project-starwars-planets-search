import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import PlanetsContext from './PlanetsContext';
import fetchPlanets from '../services/fetchPlanetsApi';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });

  const planetsData = async () => {
    const planets = await fetchPlanets();
    setData(planets);
  };

  // ref: https://github.com/tryber/sd-014-b-project-starwars-planets-search/pull/81/commits/d03e3e3aab542b3ba0af1bd5a1ca67a776a0cf29
  const filterByNamePlanets = (value) => {
    setFilters({
      ...filters,
      filterByName: {
        ...filters.filterByName,
        name: value,
      },
    });
  };

  useEffect(() => {
    planetsData();
  }, []);

  const contextValue = {
    data,
    filters,
    planetsData,
    filterByNamePlanets,
  };

  return (
    <PlanetsContext.Provider value={ contextValue }>
      { children }
    </PlanetsContext.Provider>
  );
}

// ref: https://github.com/tryber/sd-014-b-project-starwars-planets-search/pull/82/files
PlanetsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PlanetsProvider;
