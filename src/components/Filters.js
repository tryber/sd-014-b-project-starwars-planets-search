import React from 'react';

function Filters() {
  return (
    <section>
      <select data-testid="column-filter">
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <select data-testid="comparison-filter">
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input data-testid="value-filter" type="number" />
      <button data-testid="button-filter" type="submit">Filtrar</button>
    </section>
  );
}

export default Filters;
