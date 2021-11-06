import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SearchArea() {
  // const { filters } = useContext(StarWarsContext);
  const { filteredSearch, setFilteredSearch } = useContext(StarWarsContext);

  return (
    <section>
      <input
        type="text"
        data-testid="name-filter"
        placeholder="Search a especific planet"
        value={ filteredSearch }
        onChange={ ({ target: { value } }) => setFilteredSearch(value) }
      />
    </section>
  );
}

export default SearchArea;
