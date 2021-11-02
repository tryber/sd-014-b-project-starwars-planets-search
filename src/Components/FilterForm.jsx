import React, { useContext } from 'react';
import TableContext from '../context/TableContext';

function FilterForm() {
  /* const { filters, setFilters } = useContext(TableContext);
  function handleChange({ target }) {
    if (target.name === 'columns') {
      setFilters({ filterByNumericValues: [{ column: target.value }] });
    }
  } */
  return (
    <div>
      <form>
        <select
          name="columns"
          data-testid="column-filter"
          /* value={ filters.filterByNumericValues[0].column }
          onChange={ (event) => handleChange(event) } */
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        <select
          name="comparison"
          data-testid="comparison-filter"
          /* value={ filters.filterByNumericValues[0].comparison } */
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          type="number"
          name="value"
          data-testid="value-filter"
          /* value={ filters.filterByNumericValues[0].value } */
        />
      </form>
      <button
        type="button"
        data-testid="button-filter"
      >
        Filtrar
      </button>
    </div>
  );
}

export default FilterForm;
