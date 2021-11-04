import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function FormFilter() {
  const { filter, handlechange, handleClick } = useContext(MyContext);
  const select1 = document.getElementById('column');
  const select2 = document.getElementById('comparison');
  const number = document.getElementById('number');

  return (
    <form>
      <input
        data-testid="name-filter"
        type="text"
        id="name"
        placeholder="Filtrar por nome"
        value={ filter.filters.filterByName.name }
        onChange={ handlechange }
      />
      <select data-testid="column-filter" id="column">
        <option value="population" id="population">population</option>
        <option value="orbital_period" id="orbital_period">orbital_period</option>
        <option value="diameter" id="diameter">diameter</option>
        <option value="rotation_period" id="rotation_period">rotation_period</option>
        <option value="surface_water" id="surface_water">surface_water</option>
      </select>
      <select data-testid="comparison-filter" id="comparison">
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
      <select>
        <option>population</option>
      </select>
      <fieldset>
        Ordenar
        <label htmlFor="Ascendente">
          Ascendente
          <input type="radio" id="Ascendente" />
        </label>
        <label htmlFor="Descendente">
          Descendente
          <input type="radio" id="Descendente" />
        </label>
        <button type="button">Ordenar</button>
      </fieldset>
    </form>
  );
}

export default FormFilter;
