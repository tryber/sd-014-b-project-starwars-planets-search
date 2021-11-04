import React, { useState } from 'react';

function SearchBar() {
  const [searchPlanet, setPlanet] = useState('');
  const handleChange = ({ target }) => {
    setPlanet(target.value);
  };

  return (
    <form>
      <label htmlFor="searchPlanet">
        <input
          value={ searchPlanet }
          onChange={ handleChange }
          type="text"
          name="searchPlanet"
          id="searchPlanet"
          placeholder="Filtrar por nome"
        />
      </label>
    </form>
  );
}

export default SearchBar;
