import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarwarsContext from './StarwarsContext';
import { columnFilter, FILTERS, INITIAL_COMPARISON } from '../services/data';
import useFetch from '../hooks/useFetch';

const StarwarsProvider = ({ children }) => {
  const [data, loading] = useFetch('https://swapi-trybe.herokuapp.com/api/planets');
  const [planets, setPlanets] = useState(data);
  const [columns, setColumns] = useState(columnFilter);
  const [filters, setFilters] = useState(FILTERS);
  const [stateComparison, setStateComparison] = useState(INITIAL_COMPARISON);

  const filterStarwarsPlanetByName = ({ target: { value } }) => {
    const filterByNamePlanet = data.filter(
      (planet) => planet.name.toLowerCase().includes(value.toLowerCase()),
    );
    setPlanets(filterByNamePlanet);
  };

  const switchComparison = (planet, state) => {
    const { comparison, column, value } = state;
    switch (comparison) {
    case 'maior que':
      return Number(planet[column]) > Number(value);
    case 'menor que':
      return Number(planet[column]) < Number(value);
    case 'igual a':
      return Number(planet[column]) === Number(value);
    default:
      return planet;
    }
  };

  const filterStarwarsComparison = () => {
    const { filterByNumericValues } = filters;
    setFilters({ ...filters,
      filterByNumericValues: [
        ...filterByNumericValues, stateComparison,
      ] });

    const filterByNumericValuesPlanet = planets.filter(
      (planet) => switchComparison(planet, stateComparison),
    );
    setColumns(columns.filter((column) => column !== stateComparison.column));
    setPlanets(filterByNumericValuesPlanet);
  };

  const filterStarwarsByHistory = (column) => {
    const { filterByNumericValues } = filters;

    if (!filterByNumericValues[filterByNumericValues.length - 2]) {
      setColumns([...columns, column]);
      return setPlanets(data);
    }
    const filterByHistoryPlanet = data.filter(
      (planet) => switchComparison(planet,
        filterByNumericValues[filterByNumericValues.length - 2]),
    );
    setColumns([...columns, column]);
    setPlanets(filterByHistoryPlanet);
  };

  useEffect(() => {
    setPlanets(data);
  }, [data]);

  const state = {
    planets,
    loading,
    filters,
    columns,
    stateComparison,
    setColumns,
    setFilters,
    switchComparison,
    setStateComparison,
    filterStarwarsComparison,
    filterStarwarsPlanetByName,
    filterStarwarsByHistory,
  };

  return (
    <StarwarsContext.Provider value={ state }>
      { children }
    </StarwarsContext.Provider>
  );
};

StarwarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarwarsProvider;
