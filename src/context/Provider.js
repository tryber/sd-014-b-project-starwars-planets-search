import React from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import usePlanets from '../services/starWarsApi';

function Provider({ children }) {
  const [data] = usePlanets();

  const context = {
    data,
  };

  return (
    <PlanetsContext.Provider value={ context }>
      {children}
    </PlanetsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
