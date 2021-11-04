import React, { useState, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function Filters() {
  const { filters, setFilterNumericValues } = useContext(StarWarsContext);

  const [column, setFilterColumn] = useState('population');
  const [comparison, setFilterComparison] = useState('igual a');
  const [value, setFilterValue] = useState('0');

  function handleFilterColumn({ target }) {
    setFilterColumn(target.value);
  }

  function handleFilterComparison({ target }) {
    setFilterComparison(target.value);
  }

  function handleFilterValue({ target }) {
    setFilterValue(target.value);
  }

  function buttonFilter() {
    setFilterNumericValues([...filters.filterByNumericValues,
      { column, comparison, value }]);
  }

  return (
    <div>
      <label htmlFor="column-filter">
        <select
          name="column-filter"
          data-testid="column-filter"
          onChange={ handleFilterColumn }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>

      <label htmlFor="comparison-filter">
        <select
          name="comparison-filter"
          data-testid="comparison-filter"
          onChange={ handleFilterComparison }
        >
          <option value="igual a">igual a</option>
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
        </select>
      </label>

      <label htmlFor="value-filter">
        <input
          type="number"
          min="0"
          name="value-filter"
          data-testid="value-filter"
          onChange={ handleFilterValue }
        />
      </label>

      <button
        type="button"
        data-testid="button-filter"
        onClick={ buttonFilter }
      >
        Filter
      </button>

    </div>
  );
}
