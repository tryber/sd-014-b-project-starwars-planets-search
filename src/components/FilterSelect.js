import React, { useState } from 'react';

function FilterSelect() {
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [inputValue, setInputValue] = useState('100000');

  function handleChangeColumn({ target }) {
    const { value } = target;
    setColumn(value);
  }

  function handleChangeComparison({ target }) {
    const { value } = target;
    setComparison(value);
  }

  function handleChangeInputValue({ target }) {
    const { value } = target;
    setInputValue(value);
  }

  return (
    <div>
      <select value={ column } onChange={ handleChangeColumn } testid="column-filter">
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <select
        value={ comparison }
        onChange={ handleChangeComparison }
        testid="comparison-filter"
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <label
        value={ inputValue }
        onChange={ handleChangeInputValue }
        htmlFor="value-filter"
      >
        <input
          data-testid="value-filter"
          id="value-filter"
          name="value"
          type="number"
        />
        <button data-testid="button-filter" type="button">Filtrar</button>
      </label>
    </div>
  );
}

export default FilterSelect;
