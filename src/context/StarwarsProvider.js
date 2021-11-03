import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarwarsContext from './StarwarsContext';
import { FILTERS } from '../services/data';
import useFetch from '../hooks/useFetch';

const StarwarsProvider = ({ children }) => {
  const [data, loading] = useFetch('https://swapi-trybe.herokuapp.com/api/planets');
  const [planets, setPlanets] = useState(data);
  const [filters, setFilters] = useState(FILTERS);

  const filterStarwarsPlanetByName = () => {
    const { filterByName } = filters;
    const { name } = filterByName;
    const filterByNamePlanet = data.filter(
      (planet) => planet.name.toLowerCase().includes(name.toLowerCase()),
    );
    return setPlanets(filterByNamePlanet);
  };

  const switchComparison = (planet, filterByNumericValues) => {
    const { comparison, column, value } = filterByNumericValues;
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
    const filterByNumericValuesPlanet = data.filter(
      (planet) => switchComparison(planet, filterByNumericValues[0]),
    );
    return setPlanets(filterByNumericValuesPlanet);
  };

  useEffect(() => {
    setPlanets(data);
  }, [data]);

  useEffect(() => {
    filterStarwarsPlanetByName();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  const state = {
    planets,
    loading,
    filters,
    setFilters,
    filterStarwarsComparison,
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
