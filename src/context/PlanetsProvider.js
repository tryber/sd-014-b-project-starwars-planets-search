import PropTypes from 'prop-types';
import React, { createContext, useEffect, useState } from 'react';

export const PlanetsContext = createContext();

const PLANETS_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const INITIAL_FILTER = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
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

  function getFilterParams(filter, planet) {
    const { column, comparison, value } = filter;
    if (comparison !== 'igual a') {
      return comparison === 'maior que'
        ? +(planet[column]) > +(value) : +(planet[column]) < +(value);
    }
    return planet[column] === value;
  }

  useEffect(() => fetchPlanets(), []);

  useEffect(() => {
    function filterByName() {
      return planets.filter(({ name }) => (
        name.toLowerCase().includes(filters.filterByName.name)
      ));
    }

    if (planets.length > 0) setData(filterByName());
  }, [filters.filterByName]);

  useEffect(() => {
    function filterByQuantity() {
      let planetsResult = planets;
      filters.filterByNumericValues.forEach((filter) => {
        planetsResult = planetsResult
          .filter((planet) => getFilterParams(filter, planet));
      });
      return planetsResult;
    }

    if (planets.length > 0) setData(filterByQuantity());
  }, [filters.filterByNumericValues.length]);

  const state = {
    data,
    setData,
    filters,
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
