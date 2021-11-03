import PropTypes from 'prop-types';
import React, { createContext, useEffect, useState } from 'react';

export const PlanetsContext = createContext();

const PLANETS_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const INITIAL_FILTER = {
  filters: {
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
  },
};

function PlanetsProvider({ children }) {
  const [planets, getPlanets] = useState([]);
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState(INITIAL_FILTER);

  function fetchPlanets() {
    fetch(PLANETS_URL)
      .then((response) => response.json())
      .then((result) => {
        getPlanets(result.results);
        setData(result.results);
      });
  }

  useEffect(() => fetchPlanets(), []);

  useEffect(() => {
    function filterByName() {
      return planets.filter(({ name }) => (
        name.toLowerCase().includes(filters.filters.filterByName.name)
      ));
    }

    if (planets.length > 0) setData(filterByName());
  }, [filters, planets]);

  const state = {
    data,
    setData,
    filters: filters.filters,
    setFilters,
  };

  return (
    <PlanetsContext.Provider value={ state }>
      { children }
    </PlanetsContext.Provider>);
}

PlanetsProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default PlanetsProvider;
