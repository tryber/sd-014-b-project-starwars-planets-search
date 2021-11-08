import React, { useContext } from 'react';
import SearchContext from '../context/SearchContext';

function Search() {
  const { nameFilter, setNameFilter } = useContext(SearchContext);
  return (
    <label htmlFor="name-filter">
      Filter by name:
      <input
        type="text"
        value={ nameFilter }
        data-testid="name-filter"
        onChange={ ({ target: { value } }) => {
          setNameFilter(value);
        } }
      />
    </label>
  );
}

export default Search;
