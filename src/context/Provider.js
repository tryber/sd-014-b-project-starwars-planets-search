import React from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';
import useFetch from '../hooks/useFetch';

export default function Provider({ children }) {
  const [data, loading] = useFetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const contextValue = {
    data,
    loading,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
