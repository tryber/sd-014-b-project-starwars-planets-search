import React, { useContext } from 'react';
import PlannetsContext from '../context/PlannetsContext';

export default function SearchBar() {
  const { filters: { filterByName: { name } }, setName } = useContext(PlannetsContext);
  return (
    <label htmlFor="name-filter">
      <input
        type="text"
        data-testid="name-filter"
        value={ name }
        onChange={ ({ target }) => setName(target.value) }
      />
    </label>
  );
}
