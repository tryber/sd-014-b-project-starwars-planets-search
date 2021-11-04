import React, { useContext, useState } from 'react';
import Select from './Select';
import PlanetsTableContext from '../contexts';

export default function SortingInput() {
  const {
    filters,
    numericOptions,
    setFilters,
  } = useContext(PlanetsTableContext);

  const { order } = filters;

  const [inputValues, setInputValues] = useState({
    ...order,
  });

  function handleChange({ target: { name, value } }) {
    setInputValues({ ...inputValues, [name]: value });
  }

  function handleClick() {
    setFilters({ ...filters, order: { ...inputValues } });
  }

  const { column, sort } = inputValues;

  return (
    <div>
      <strong>Ordernar por:</strong>
      <Select
        name="column"
        options={ ['name', ...numericOptions] }
        value={ column }
        onChange={ handleChange }
        data-testid="column-sort"
      />
      <label
        htmlFor="asc"
      >
        <strong>Ascendente</strong>
        <input
          type="radio"
          name="sort"
          id="asc"
          value="ASC"
          onChange={ handleChange }
          checked={ sort === 'ASC' }
          data-testid="column-sort-input-asc"
        />
      </label>
      <label
        htmlFor="desc"
      >
        <strong>Descendente</strong>
        <input
          type="radio"
          name="sort"
          id="desc"
          value="DESC"
          onChange={ handleChange }
          checked={ sort === 'DESC' }
          data-testid="column-sort-input-desc"
        />
      </label>
      <button
        type="button"
        onClick={ handleClick }
        data-testid="column-sort-button"
      >
        Ordernar
      </button>
    </div>
  );
}
