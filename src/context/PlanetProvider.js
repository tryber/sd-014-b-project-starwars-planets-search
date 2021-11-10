import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';
import getPlanet from '../services/planetApi';

function PlanetProvider({ children }) {
  const [planet, setPlanet] = useState([]);

  async function requestApiPlanet() {
    const results = await getPlanet();
    setPlanet(results);
  }

  useEffect(() => {
    requestApiPlanet();
  }, []);

  const contextValue = {
    planet,
    setPlanet,
  };

  return (
    <PlanetContext.Provider value={ contextValue }>
      {children}
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetProvider;
