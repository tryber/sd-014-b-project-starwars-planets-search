import PropTypes from 'prop-types';
import React, { useState } from 'react';
import SearchContext from './SearchContext';

function SearchProvider({ children }) {
  const [nameFilter, setNameFilter] = useState('');

  return (
    <SearchContext.Provider value={ { nameFilter, setNameFilter } }>
      { children }
    </SearchContext.Provider>
  );
}

SearchProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default SearchProvider;
