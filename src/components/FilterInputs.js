import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import '../style.css';

function FilterInputs() {
  const { setPlanetName } = useContext(StarWarsContext);

  function handleFilterChange({ target: { value } }) {
    setPlanetName(value);
  }

  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        className="name-filter"
        placeholder="Filtrar por nome"
        onChange={ handleFilterChange }
      />
    </div>
  );
}

export default FilterInputs;
