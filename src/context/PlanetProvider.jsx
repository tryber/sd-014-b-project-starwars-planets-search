import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchPlanet from '../services/fetchPlanets';

export const PlanetContext = createContext();

export default function PlanetProvider(props) {
  const { children } = props;
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    setPlanets(fetchPlanet);
  }, []);

  return (
    <PlanetContext.Provider value={ { planets } }>
      {children}
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};
