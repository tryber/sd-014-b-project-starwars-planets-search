import React, { useContext } from 'react';
import Context from '../context/Context';

function Filters() {
  const { filter, handlechange, handleClick } = useContext(Context);
  const select1 = document.getElementById('column-filter');
  const select2 = document.getElementById('comparison-filter');
  const number = document.getElementById('number');

  return (
    <form>
      <input
        data-testid="name-filter"
        type="text"
        id="name"
        placeholder="Filtrar por nome"
        defaultValue={ filter.filters.filterByName.name }
        onChange={ handlechange }
      />

      <select data-testid="column-filter" id="column-filter">
        <option value="population" id="population">population</option>
        <option value="orbital_period" id="orbital_period">orbital_period</option>
        <option value="diameter" id="diameter">diameter</option>
        <option value="rotation_period" id="rotation_period">rotation_period</option>
        <option value="surface_water" id="surface_water">surface_water</option>
      </select>

      <select data-testid="comparison-filter" id="comparison-filter">
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <input
        id="number"
        data-testid="value-filter"
        type="number"
        placeholder="0"
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => handleClick(select1.value, select2.value, number.value) }
      >
        Filtrar
      </button>
    </form>
  );
}

export default Filters;
