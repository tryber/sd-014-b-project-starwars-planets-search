import React, { useContext } from 'react';
import planetsContext from '../context/PlanetsContext';

function Filters() {
  const { handleChange,
    handleColumnFilter,
    handleComparisonFilter } = useContext(planetsContext);
  return (
    <main>
      <label htmlFor="input-filter">
        <input
          data-testid="name-filter"
          name="name"
          type="text"
          id="input-filter"
          placeholder="Filtrar por nome"
          onChange={ (event) => handleChange(event) }
        />
      </label>
      <section>
        <select
          data-testid="column-filter"
          onChange={ (event) => handleColumnFilter(event) }
        >
          <option>Population</option>
          <option>Orbital Period</option>
          <option>Diameter</option>
          <option>Rotation Period</option>
          <option>Surface Water</option>
        </select>
        <select
          data-testid="comparison-filter"
          onChange={ (event) => handleComparisonFilter(event) }
        >
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
