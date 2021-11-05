import React, { useContext } from 'react';
import PlanetContext from '../Context/PlanetContext';

function SearchForm() {
  const { name, setNames } = useContext(PlanetContext);
  return (
    <label htmlFor="name-filter">
      <input
        data-testid="name-filter"
        type="text"
        value={ name }
        onChange={ (event) => setNames(event.target.value) }
      />
    </label>
  );
}

export default SearchForm;
