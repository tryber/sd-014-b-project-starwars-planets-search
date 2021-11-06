import React, { useState } from 'react';
import { useFilters } from '../context/Filters';
import { usePlanets } from '../context/Planets';

const Sort = () => {
  const [sortState, setSortState] = useState({
    columnValue: 'name',
    radioValue: 'ASC',
  });

  const { columnValue, radioValue } = sortState;

  const { planets } = usePlanets();

  const { filters, setFilters } = useFilters();

  let columnOptions = ['no_options_available'];

  if (planets.length > 0) {
    columnOptions = Object.keys(planets[0]);
  }

  const columnOptionsDisplayed = columnOptions.map((option, index) => (
    <option key={ index } value={ option }>{ option }</option>
  ));

  const changeRadioState = ({ target: { value } }) => {
    if (radioValue !== value) {
      setSortState({ ...sortState, radioValue: value });
    }
  };

  return (
    <section>
      <select
        data-testid="column-sort"
        value={ columnValue }
        onChange={ ({ target }) => setSortState(
          { ...sortState, columnValue: target.value },
        ) }
      >
        { columnOptionsDisplayed }
      </select>
      <label htmlFor="ASC">
        Ascendente
        <input
          id="ASC"
          type="radio"
          value="ASC"
          name="sort-type"
          onChange={ changeRadioState }
          checked={ radioValue === 'ASC' }
          data-testid="column-sort-input-asc"
        />
      </label>
      <label htmlFor="DESC">
        Descendente
        <input
          id="DESC"
          type="radio"
          value="DESC"
          name="sort-type"
          onChange={ changeRadioState }
          checked={ radioValue === 'DESC' }
          data-testid="column-sort-input-desc"
        />
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ () => setFilters(
          { ...filters, order: { column: columnValue, sort: radioValue } },
        ) }
      >
        Ordenar

      </button>
    </section>
  );
};

export default Sort;
