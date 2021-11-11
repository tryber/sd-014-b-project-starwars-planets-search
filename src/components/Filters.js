import React from 'react';

function Filters() {
  return (
    <main>
      <label htmlFor="input-filter">
        <input
          type="text"
          id="input-filter"
          placeholder="Filtrar por nome"
        />
      </label>
      <section>
        <select data-testid="column-filter">
          <option>Population</option>
          <option>Orbital Period</option>
          <option>Diameter</option>
          <option>Rotation Period</option>
          <option>Surface Water</option>
        </select>
        <select data-testid="comparison-filter">
          <option>Larger than</option>
          <option>Smaller than</option>
          <option>Equals to</option>
        </select>
        <input data-testid="value-filter" type="number" />
        <button data-testid="button-filter" type="submit">Filter</button>
      </section>
    </main>
  );
}

export default Filters;
