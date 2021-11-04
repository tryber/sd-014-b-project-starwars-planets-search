import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

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

    </section>
  );
}

export default SearchInput;
