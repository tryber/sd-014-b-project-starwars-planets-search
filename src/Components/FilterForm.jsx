import React from 'react';

function FilterForm() {
  return (
    <div>
      <form>
        <select name="columns" data-testid="column-filter">
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        <select name="comparison" data-testid="comparison-filter">
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input type="number" name="value" data-testid="value-filter" />
      </form>
      <button
        type="button"
        data-testid="button-filter"
      >
        filtrar
      </button>
    </div>
  );
}

export default FilterForm;
