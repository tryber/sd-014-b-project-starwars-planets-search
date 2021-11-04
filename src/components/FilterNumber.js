import React from 'react';
import './table.css';

function FilterNumber() {
  return (
    <div>
      <label htmlFor="columnFilter">
        <select id="columnFilter" data-testid="column-filter">
          <option>population</option>
          <option>orbital_period</option>
          <option>diameter</option>
          <option>rotation_period</option>
          <option>surface_water</option>
        </select>
      </label>
      <label htmlFor="comparisonFilter">
        <select id="comparisonFilter" data-testid="comparison-filter">
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
      </label>
      <label htmlFor="valueFilter">
        <input id="valueFilter" data-testid="value-filter" />
      </label>
      <button type="button" data-testid="button-filter">Filtrar</button>
    </div>
  );
}

export default FilterNumber;
