import PropTypes from 'prop-types';
import React, { createContext, useState } from 'react';

export const SearchContext = createContext();

export function Provider({ children }) {
  const [filter, setFilter] = useState('');
  const [array, setArray] = useState([]);
  const filters = {
    filterByName: {
      name: filter,
    },
  };

  const context = {
    filter,
    setFilter,
    array,
    setArray,
    filters,
  };

  return (
    <SearchContext.Provider value={ context }>
      {children}
    </SearchContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;
