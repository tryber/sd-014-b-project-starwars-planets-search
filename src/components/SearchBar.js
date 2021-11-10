import React, { useContext } from 'react';
import DataContext from '../context/DataContext';

function SearchBar() {
  const { filteredPlanets, setFilteredPlanets, setData, data } = useContext(DataContext);

  function handleChange({ target }) {
    const name = target.value;
    setFilteredPlanets(name);
    setData(data.filter((planet) => planet.name
      .includes(filteredPlanets)));
  }

  return (
    <span>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ handleChange }
        placeholder="Digite o nome de um planeta"
        value={ filteredPlanets }
      />
    </span>
  );
}

export default SearchBar;

// Referências: https://github.com/tryber/sd-014-b-project-starwars-planets-search/pull/110/files
// https://github.com/tryber/sd-014-b-project-starwars-planets-search/pull/43/files
// https://github.com/tryber/sd-014-b-project-starwars-planets-search/pull/44/files
