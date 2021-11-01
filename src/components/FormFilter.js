import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function FormFilter() {
  const { filter, handlechange } = useContext(MyContext);
  return (
    <form>
      <input
        data-testid="name-filter"
        type="text"
        placeholder="Filtrar por nome"
        value={ filter.filters.filterByName.name }
        onChange={ handlechange }
      />
      <select data-testid="column-filter">
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select data-testid="comparison-filter">
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        placeholder="0"
      />
      <button type="button">Filtrar</button>
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
