import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

const INITIAL_STATE = {
  planets: [],
};

const PlanetsContext = createContext(INITIAL_STATE);

export function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState(INITIAL_STATE.planets);

  const context = {
    planets,
    setPlanets,
  };

  return (
    <PlanetsContext.Provider value={ context }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsContext;
