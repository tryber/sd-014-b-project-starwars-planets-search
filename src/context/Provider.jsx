import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import PlanetsContext from './PlanetsContext';
import mockData from '../testData';

const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const INITIAL_STATE = {
  filters:
  {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  },
};

export default function Provider({ children }) {
  const [allPlanets, setAllPlanets] = useState([]);
  const [planetsFilter, setPlanetsFilter] = useState(allPlanets);
  const [filterObject, setFilter] = useState(INITIAL_STATE);

  const fetchPlanets = async () => {
    try {
      const response = await fetch(URL);
      const resolve = await response.json();
      setAllPlanets(resolve.results);
      setPlanetsFilter(resolve.results);
    } catch (error) {
      setAllPlanets(mockData.results);
      setPlanetsFilter(mockData.results);
    }
  };

  useEffect(() => {
    fetchPlanets();
    console.log('fetch-planets');
  }, []);

  const context = {
    allPlanets,
    planetsFilter,
    filterObject,
    setFilter,
    setPlanetsFilter,
  };

  return (
    <PlanetsContext.Provider value={ context }>
      { children }
    </PlanetsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
