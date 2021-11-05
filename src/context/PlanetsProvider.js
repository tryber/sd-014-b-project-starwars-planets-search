import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [
    {
      column: 'population',
      comparison: 'maior que',
      value: '100000',
    },
  ],
};

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [backup, setBackup] = useState([]);
  const [isFetch, setIsFetch] = useState(false);
  const [filters, setFilters] = useState(INITIAL_STATE);

  const contextValue = {
    data,
    setData,
    backup,
    setBackup,
    isFetch,
    setIsFetch,
    filters,
    setFilters,
  };

  async function fetchPlanets() {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const planets = await response.json();
    setData(planets.results);
    setBackup(planets.results);
    setIsFetch(true);
  }

  useEffect(() => { fetchPlanets(); }, []);

  return (
    <PlanetsContext.Provider value={ contextValue }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PlanetsProvider;
