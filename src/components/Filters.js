import React, { useContext, useState } from 'react';
import planetsContext from '../context/PlanetsContext';

function Filters() {
  const initialState = {
    column: 'population',
    comparison: 'maior que',
    value: 0,
  };

  const [filterNumericValues, setHandleFilter] = useState(initialState);

  const handleFilter = ({ target }) => (
    setHandleFilter({
      ...filterNumericValues,
      [target.name]: target.value,
    })
  );

  const { handleChange, handleFilterClick } = useContext(planetsContext);
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
          name="column"
          onChange={ (event) => handleFilter(event) }

        >
          <option>population</option>
          <option>orbital_period</option>
          <option>diameter</option>
          <option>rotation_period</option>
          <option>surface_water</option>
        </select>
        <select
          data-testid="comparison-filter"
          name="comparison"
          onChange={ (event) => handleFilter(event) }
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
        <input
          data-testid="value-filter"
          type="number"
          name="value"
          onChange={ (event) => handleFilter(event) }
        />
        <button
          data-testid="button-filter"
          type="submit"
          onClick={ () => handleFilterClick(filterNumericValues) }
        >
          Filter
        </button>
      </section>
    </main>
  );
}

export default Filters;
