import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarwarsContext from './StarwarsContext';

const INITIAL_FILTERS = {
  filters: {
    filterByName: {
      name: '',
    },
  },
};

const StarwarsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [isFetching, setFetching] = useState(true);
  const [filters, setFilters] = useState(INITIAL_FILTERS);

  const getStarwarsPlanetAPI = async () => {
    const url = 'https://swapi-trybe.herokuapp.com/api/planets';
    try {
      const request = await fetch(url);
      const resolve = await request.json();
      setData(resolve.results);
      setPlanets(resolve.results);
      return setFetching(false);
    } catch (error) {
      return console.error(error);
    }
  };

  const filterStarwarsPlanetByName = () => {
    const { filterByName } = filters.filters;
    const { name } = filterByName;
    const filterByNamePlanet = data.filter(
      (planet) => planet.name.toLowerCase().includes(name.toLowerCase()),
    );
    return setPlanets(filterByNamePlanet);
  };

  useEffect(() => {
    getStarwarsPlanetAPI();
  }, []);

  useEffect(() => {
    filterStarwarsPlanetByName();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  const state = {
    planets,
    isFetching,
    filters,
    setFilters,
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
