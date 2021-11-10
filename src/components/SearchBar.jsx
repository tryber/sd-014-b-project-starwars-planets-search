import React, { useState, useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function SearchBar() {
  const { setFilterName, planets, setPlanets } = useContext(PlanetContext);
  const [searchValue, setSearchValue] = useState('');

  function handleChange(value) {
    setSearchValue(value);
    setFilterName(value);
    const filterPlanetByName = planets.filter(({ name }) => (
      name.toLowerCase().includes(value.toLowerCase())
    ));
    setPlanets(filterPlanetByName);
  }

  return (
    <form className="search-bar">
      <input
        className="search-bar-input"
        data-testid="name-filter"
        type="text"
        placeholder="Filtre por nome"
        value={ searchValue }
        onChange={ ({ target: { value } }) => handleChange(value) }
      />
    </form>
  );
}

export default SearchBar;
