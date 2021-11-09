import PropTypes from 'prop-types';
import React, { useState } from 'react';
import SearchContext from './SearchContext';

function SearchProvider({ children }) {
  const [nameFilter, setNameFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState([]);

  const context = {
    nameFilter,
    setNameFilter,
    typeFilter,
    setTypeFilter,
  };

  return (
    <SearchContext.Provider value={ context }>
      { children }
    </SearchContext.Provider>
  );
}

SearchProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default SearchProvider;
