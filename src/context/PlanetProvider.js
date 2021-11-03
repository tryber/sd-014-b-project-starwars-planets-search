import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';
import getPlanet from '../services/planetApi';

function PlanetProvider({ children }) {
  const [planet, setPlanet] = useState([]);

  requestApiPlanet = async () => {
    const results = await getPlanet();
    setPlanet(results);
  };

  return (
    <PlanetContext.Provider value={ planet }>
      {children}
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetProvider;
