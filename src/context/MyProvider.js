import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';
import { getPlanets } from '../services';

// Parte desse código foi inspirado no repositório do Michael Cachias https://github.com/tryber/sd-014-b-project-starwars-planets-search/blob/michaelcaxias-starwars-planets/src/hooks/useFilter.jsx
const INITIAL_STATE = {
  filters:
  {
    filterByName: {},
    filterByNumericValues: [],
  },
};

export default function MyProvider({ children }) {
  const [filters, setFilters] = useState(INITIAL_STATE);

  const filterByName = (name) => {
    setFilters({
      filters: {
        ...INITIAL_STATE.filters,
        filterByName: { name },
      },
    });
  };

  const filterByNumericValues = (name) => {
    setFilters({
      filters: {
        ...INITIAL_STATE.filters,
        filterByNumericValues: [
          ...INITIAL_STATE.filters.filterByNumericValues,
          { ...name },
        ],
      },
    });
  };

  const [planetsData, setPlanetsData] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);

  useEffect(() => {
    (async () => setPlanetsData(await getPlanets()))();
  }, []);

  useEffect(() => { setFilteredPlanets(planetsData); }, [planetsData]);

  const contextValue = {
    planetsData,
    filteredPlanets,
    setFilteredPlanets,
    filters,
    filterByName,
    filterByNumericValues,
  };

  return (
    <MyContext.Provider value={ contextValue }>
      {children}
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
