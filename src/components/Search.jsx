import React, { useState, useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function Search() {
  const { setFilterName } = useContext(PlanetsContext);
  const [searchValue, setSearch] = useState('');

  const handleFilter = (value) => {
    setSearch(value);
    setFilterName(value);
  };

  return (
    <form>
      <input
        data-testid="name-filter"
        type="text"
        value={ searchValue }
        onChange={ ({ target: { value } }) => handleFilter(value) }
        placeholder="Search"
      />
    </form>
  );
}
