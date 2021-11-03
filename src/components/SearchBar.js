import React, { useState, useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function SearchBar() {
  const { setFilterName, inicialPlanet, setPlanet } = useContext(PlanetContext);
  const [searchValue, setSearchValue] = useState('');

  function handleChange(value) {
    setSearchValue(value);
    setFilterName(value);
    const filterPlanetByName = inicialPlanet.filter(({ name }) => (
      name.toLowerCase().includes(value.toLowerCase())
    ));
    setPlanet(filterPlanetByName);
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
