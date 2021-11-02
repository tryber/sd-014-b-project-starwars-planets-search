import React, { useContext } from 'react';
import planetsContext from '../context/PlanetsContext';
import '../styles/Filters.css';

function Filters() {
  const { handleChange,
    handleColumnFilter,
    handleComparisonFilter } = useContext(planetsContext);
  return (
    <main className="main-filters">
      <label htmlFor="input-filter">
        <input
          data-testid="name-filter"
          type="text"
          id="input-filter"
          name="name"
          placeholder="Filtrar por nome"
          className="input-filter"
          onKeyUp={ (event) => handleChange(event) }
        />
      </label>
      <section className="section-filters">
        <select
          data-testid="column-filter"
          onChange={ (event) => handleColumnFilter(event) }
        >
          <option>population</option>
          <option>orbital_period</option>
          <option>diameter</option>
          <option>rotation_period</option>
          <option>surface_water</option>
        </select>
        <select
          data-testid="comparison-filter"
          onChange={ (event) => handleComparisonFilter(event) }
        >
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
