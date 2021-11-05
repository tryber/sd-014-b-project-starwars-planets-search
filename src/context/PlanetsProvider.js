import PropTypes from 'prop-types';
import React, { createContext, useEffect, useState } from 'react';

export const PlanetsContext = createContext();

const PLANETS_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const INITIAL_FILTER = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
  order: {
    column: 'name',
    sort: 'ASC',
  },
};

function PlanetsProvider({ children }) {
  const [planets, getPlanets] = useState([]);
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState(INITIAL_FILTER);

  const { filterByName, filterByNumericValues, order } = filters;

  function fetchPlanets() {
    fetch(PLANETS_URL)
      .then((response) => response.json())
      .then((result) => {
        setData(result.results);
        getPlanets(result.results);
      });
    console.log('fetchPlnts');
  }

  function getFilterParams(filter, planet) {
    const { column, comparison, value } = filter;
    if (comparison !== 'igual a') {
      return comparison === 'maior que'
        ? +(planet[column]) > +(value) : +(planet[column]) < +(value);
    }
    return planet[column] === value;
  }

  function sortPlanets(dataArray, column, rule) {
    const sortedData = [...dataArray].sort((a, b) => {
      const valueA = Number.isNaN(+(a[column])) ? a[column] : +(a[column]);
      const valueB = Number.isNaN(+(b[column])) ? b[column] : +(b[column]);
      if (valueA < valueB) {
        return rule === 'ASC' ? (1 - 2) : 1;
      }
      if (valueA > valueB) {
        return rule !== 'ASC' ? (1 - 2) : 1;
      }
      return 0;
    });
    return sortedData;
  }

  useEffect(() => fetchPlanets(), []);

  useEffect(() => {
    function filterByNames() {
      const dataResult = planets.filter(({ name }) => (
        name.toLowerCase().includes(filters.filterByName.name)
      ));
      return sortPlanets(dataResult, order.column, order.sort);
    }

    if (planets.length > 0) setData(filterByNames());
  }, [filterByName]);

  useEffect(() => {
    function filterByQuantity() {
      let planetsResult = planets;
      filters.filterByNumericValues.forEach((filter) => {
        planetsResult = planetsResult
          .filter((planet) => getFilterParams(filter, planet));
      });
      return sortPlanets(planetsResult, order.column, order.sort);
    }

    if (planets.length > 0) setData(filterByQuantity());
  }, [filterByNumericValues.length]);

  useEffect(() => {
    setData(sortPlanets(data, order.column, order.sort));
  }, [order, planets]);

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
