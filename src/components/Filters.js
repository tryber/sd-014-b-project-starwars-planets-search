import React from 'react';
import '../styles/Filters.css';

function Filters() {
  return (
    <main className="main-filters">
      <label htmlFor="input-filter">
        <input
          type="text"
          id="input-filter"
          placeholder="Filtrar por nome"
          className="input-filter"
        />
      </label>
      <section className="section-filters">
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
    </main>
  );
}

export default Filters;
