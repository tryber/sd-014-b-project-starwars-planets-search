import React, { useContext } from 'react';
import PlanetContext from '../../context/PlanetContext';

function InputName() {
  const { filters, setFilters } = useContext(PlanetContext);

  function handleChange({ target: { value } }) {
    setFilters({ ...filters, filterByName: value });
  }

  return (
    <label htmlFor="input-name">
      Pesquisar planetas por nome
      <input
        type="text"
        name="name"
        id="input-name"
        onChange={ handleChange }
        data-testid="name-filter"
      />
    </label>
  );
}

export default InputName;
