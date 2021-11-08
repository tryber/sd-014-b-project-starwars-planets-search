import React, { useState, useContext } from 'react';
import TableContext from '../context/TableContext';

function FilterValue() {
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('');
  const { search, setSearch } = useContext(TableContext);

  function handleClick() {
    setSearch({
      ...search,
      filterByNumericValues: [
        ...search.filterByNumericValues,
        {
          column,
          comparison,
          value,
        },
      ] });
  }

  return (
    <div>
      <form>
        <select
          onChange={ (event) => setColumn(event.target.value) }
          data-testid="column-filter"
        >
          <option>
            population
          </option>
          <option>
            orbital_period
          </option>
          <option>
            diameter
          </option>
          <option>
            rotation_period
          </option>
          <option>
            surface_water
          </option>
        </select>

        <select
          onChange={ (event) => setComparison(event.target.value) }
          data-testid="comparison-filter"
        >
          <option>
            maior que
          </option>
          <option>
            menor que
          </option>
          <option>
            igual a
          </option>
        </select>

        <label htmlFor="value-filter">
          <input
            onChange={ (event) => setValue(event.target.value) }
            id="value-filter"
            data-testid="value-filter"
            type="text"
          />
        </label>
        <button onClick={ handleClick } data-testid="button-filter" type="button">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default FilterValue;
