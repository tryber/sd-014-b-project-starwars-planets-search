import React, { useContext, useState } from 'react';
import PlanetContext from '../context/PlanetContext';

function Filters() {
  const { setFilters, setClick } = useContext(PlanetContext);
  const [columnState, setColumnState] = useState('Population');
  const [comparisonState, setComparisonState] = useState('maior que');
  const [valueState, setValueState] = useState(0);

  const nameFilter = ({ target: { value } }) => {
    setFilters(
      (prevState) => ({
        ...prevState,
        filterByName: { name: value },
      }),
    );
  };

  const numericValueFilter = ({ value }, callback) => callback(value);

  const handleClick = () => {
    setClick(true);
    setFilters(
      (prevState) => ({
        ...prevState,
        filterByNumericValues: [{
          column: columnState,
          comparison: comparisonState,
          value: valueState,
        }],
      }),
    );
  };

  return (
    <form>
      <br />
      <label htmlFor="name-filter">
        Filter by planet name:
        <input
          data-testid="name-filter"
          placeholder="Enter a planet name"
          onChange={ nameFilter }
        />
      </label>
      <br />
      <label htmlFor="column-filter">
        Filter by column name and size:
        <select
          data-testid="column-filter"
          name="column"
          onChange={ ({ target }) => numericValueFilter(target, setColumnState) }
        >
          <option name="column" value="population">population</option>
          <option name="column" value="orbital_period">orbital_period</option>
          <option name="column" value="diameter">diameter</option>
          <option name="column" value="rotation_period">rotation_period</option>
          <option name="column" value="surface_water">surface_water</option>
        </select>
      </label>
      <label htmlFor="comparison-filter">
        <select
          data-testid="comparison-filter"
          name="comparison"
          id="comparison"
          onChange={ ({ target }) => numericValueFilter(target, setComparisonState) }
        >
          <option name="comparison" value="maior que">maior que</option>
          <option name="comparison" value="menor que">menor que</option>
          <option name="comparison" value="igual a">igual a</option>
        </select>
      </label>
      <input
        data-testid="value-filter"
        name="value"
        type="number"
        onChange={ ({ target }) => numericValueFilter(target, setValueState) }
      />
      <button
        onClick={ handleClick }
        data-testid="button-filter"
        type="button"
      >
        Filter
      </button>
    </form>
  );
}

export default Filters;
