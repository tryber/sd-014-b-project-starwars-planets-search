import PropTypes from 'prop-types';
import React, { useState } from 'react';
import myContext from './MyContext';

function Provider({ children }) {
  const [filters, setFilters] = useState({ filterByName: { name: '' } });
  const contextValue = {
    filters,
    setFilters,
  };
  return (
    <myContext.Provider value={ contextValue }>
      {children}
    </myContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Provider;
