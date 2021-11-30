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
  const [planetsData, setPlanetsData] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);

  useEffect(() => {
    (async () => setPlanetsData(await getPlanets()))();
  }, []);

  useEffect(() => { setFilteredPlanets(planetsData); }, [planetsData]);

  useEffect(() => {
    let filterNumeric = planetsData;
    const { filters: { filterByNumericValues } } = filters;
    filterByNumericValues.forEach(({ comparison, column, value }) => {
      filterNumeric = filterNumeric.filter((planet) => {
        if (comparison === 'maior que') {
          return +planet[column] > +value;
        } if (comparison === 'menor que') {
          return +planet[column] < +value;
        } if (comparison === 'igual a') {
          return +planet[column] === +value;
        } return null;
      });
    });
    setFilteredPlanets(filterNumeric);
  }, [filters, planetsData]);

  const filterByName = (name) => {
    setFilters((prevState) => ({
      filters: {
        ...prevState.filters,
        filterByName: { name },
      },
    }));
  };

  const delFilterNumeric = (arrFilter) => {
    setFilters(({
      filters: {
        ...filters.filters,
        filterByNumericValues: arrFilter,
      },
    }));
  };

  const filterByNumericValue = (name) => {
    setFilters(({
      filters: {
        ...filters.filters,
        filterByNumericValues: [
          ...filters.filters.filterByNumericValues,
          { ...name },
        ],
      },
    }));
  };

  const contextValue = {
    planetsData,
    filteredPlanets,
    setFilteredPlanets,
    filters,
    setFilters,
    filterByName,
    filterByNumericValue,
    delFilterNumeric,
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
