import React, { useState } from 'react';
import PropTypes from 'prop-types';
import fetchPlanetList from '../services/FetchPlanetList';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getPlanets() {
    const planets = await fetchPlanetList();
    setData(planets);
    setIsLoading(false);
  }

  return (
    <PlanetsContext.Provider value={ { data, isLoading, getPlanets } }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
