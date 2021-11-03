import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';

function PlanetProvider({ children }) {
  const [planetsData, setPlanetsData] = useState([]);
  const endPoint = 'https://swapi-trybe.herokuapp.com/api/planets/';

  async function fetchPlanetAPI() {
    const response = await fetch(endPoint);
    const data = await response.json();
    const { results } = data;
    const planetResult = results.filter((result) => delete result.residents);
    setPlanetsData(planetResult);
  }

  useEffect(() => {
    fetchPlanetAPI();
  }, []);

  return (
    <PlanetContext.Provider value={ { planetsData } }>
      {children}
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default PlanetProvider;
