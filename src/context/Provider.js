import PropTypes from 'prop-types';
import React from 'react';
import Context from './Context';

function Provider({ children }) {
  const context = {};
  return (
    <Context.Provider value={ context }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Provider;
