import React, { useState, useContext } from 'react';
import TableContext from '../context/TableContext';

function FilterValue() {
  const optionsList = ['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('');
  const [options, setOptions] = useState(optionsList);
  const [column, setColumn] = useState('population');

  const { search, setSearch } = useContext(TableContext);

  function removeOption() {
    setOptions(options.filter((option) => option !== column));
  }

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
    removeOption();
    setColumn(options[0]);
  }

  return (
    <div>
      <form>
        <select
          onChange={ (event) => setColumn(event.target.value) }
          data-testid="column-filter"
        >
          {options.map((option, index) => <option key={ index }>{option}</option>)}
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
