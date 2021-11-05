import React, { useContext, useState } from 'react';
import { PlanetsContext } from '../contexts/PlanetsContext';

function SortTable() {
  const { filters, setFilters } = useContext(PlanetsContext);
  const [order, setOrder] = useState({
    column: 'name',
    sort: 'ASC',
  });
  const columns = ['name', 'rotation_period', 'orbital_period',
    'diameter', 'climate', 'gravity', 'terrain', 'surface_water',
    'population', 'films', 'created', 'edited', 'url'];
  return (
    <>
      <label htmlFor="column-sort">
        Ordenar
        <select
          id="column-sort"
          data-testid="column-sort"
          onChange={ (e) => setOrder({ ...order, column: e.target.value }) }
        >
          { columns.map((column) => (
            <option key={ column } value={ column }>{ column }</option>
          ))}
        </select>
      </label>
      <label htmlFor="column-sort-input">
        Ascendente
        <input
          type="radio"
          name="column-sort-input"
          value="ASC"
          id="ASC"
          data-testid="column-sort-input-asc"
          onClick={ (e) => setOrder({ ...order, sort: e.target.value }) }
          defaultChecked
        />
      </label>
      <label htmlFor="column-sort-input">
        Descendente
        <input
          type="radio"
          name="column-sort-input"
          value="DESC"
          id="DESC"
          data-testid="column-sort-input-desc"
          onClick={ (e) => setOrder({ ...order, sort: e.target.value }) }
        />
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ () => setFilters({
          ...filters,
          order,
        }) }
      >
        Ordenar
      </button>
    </>
  );
}

export default SortTable;
