import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarwarsContext from './Context';

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
  const [filters, setFilters] = useState(INITIAL_FILTERS);

  const fetchPlanets = async () => {
    const url = 'https://swapi-trybe.herokuapp.com/api/planets';
    const request = await fetch(url);
    const resolve = await request.json();
    setData(resolve.results);
    setPlanets(resolve.results);
  };

  const filterPlanetByName = () => {
    const { filterByName } = filters.filters;
    const { name } = filterByName;
    // ref: https://www.w3schools.com/jsref/jsref_filter.asp
    const filteredPlanets = data.filter(
      // ref: https://www.w3schools.com/jsref/jsref_includes.asp
      (planet) => planet.name.toLowerCase().includes(name.toLowerCase()),
    );
    return setPlanets(filteredPlanets);
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  useEffect(() => {
    filterPlanetByName();
  }, [filters]);

  const state = {
    planets,
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
  // ref: https://stackoverflow.com/questions/50206801/what-is-the-difference-between-proptypes-node-and-proptypes-any-in-react/53246825
  children: PropTypes.node.isRequired,
};

export default StarwarsProvider;
