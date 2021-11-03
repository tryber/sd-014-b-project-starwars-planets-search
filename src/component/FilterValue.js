import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function FilterValue() {
  const { handleSelect, handleClick, filterSearch:
    { filters: { filterByNumericValues: { value } } } } = useContext(PlanetContext);

  return (
    <>
      <input
        type="number"
        id="number-value"
        value={ value }
        data-testid="value-filter"
        placeholder="Digite aqui o valor"
        onChange={ handleSelect }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </>
  );
}

export default FilterValue;
