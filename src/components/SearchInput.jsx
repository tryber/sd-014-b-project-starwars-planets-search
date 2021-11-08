import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';
import Filters from './Filters';

function SearchInput() {
  const { handleChange } = useContext(PlanetContext);
  return (
    <section>
      <h1>starwars universe planets</h1>
      <input
        type="text"
        placeholder="Search ..."
        data-testid="name-filter"
        onChange={ (event) => {
          handleChange(event.target.value);
        } }
      />
      <Filters />

    </section>
  );
}

export default SearchInput;
