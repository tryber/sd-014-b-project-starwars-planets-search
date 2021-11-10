import React, { useState, useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function SearchBar() {
  const { setFilterName, inicialPlanet, setPlanets } = useContext(PlanetContext);
  const [searchValue, setSearchValue] = useState('');

  function handleChange(value) {
    setSearchValue(value);
    setFilterName(value);
    const filterPlanetByName = inicialPlanet.filter(({ name }) => (
      name.toLowerCase().includes(value.toLowerCase())
    ));
    setPlanets(filterPlanetByName);
  }

  // handleChange faz com que a cada tecla digitada o estado se modifique
  // "value" é propriedade para associar o estado local com o valor do input
  // The filter() method creates a new array with all elements that pass the test
  // implemented by the provided function.
  // ou seja, a cada palavra digitada ocorre um filtro dos planetas

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
