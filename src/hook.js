import PropTypes from 'prop-types';
import React, { useState, createContext, useContext } from 'react';

const ApiContext = createContext({});

export function ApiProvider({ children }) {
  const [planet, setApi] = useState('');
  const [filter, setFilter] = useState('');
  const GlobalState = {
    planet,
    setApi,
    filter,
    setFilter,
  };

  return (
    <ApiContext.Provider value={ GlobalState }>
      {children}
    </ApiContext.Provider>
  );
}

ApiProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default function usePlanets() {
  return useContext(ApiContext);
}
