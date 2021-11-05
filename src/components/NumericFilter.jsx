import React, { useContext, useState } from 'react';
import MyContext from '../context-api/MyContext';

function NumericFilter() {
  const [arrayOptions, setArrayOptions] = useState(['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water']);
  const [inputColumn, setInputColumn] = useState('population');
  const [inputComparison, setInputComparison] = useState('maior que');
  const [inputValue, setInputValue] = useState('');
  const { setFiltredArray, filtredArray, setFilters, filters } = useContext(MyContext);
  const { filterByNumericValues } = filters;

  const filterNumeric = () => {
    const filtered = filtredArray.filter((element) => {
      if (inputComparison === 'maior que') {
        return Number(element[inputColumn]) > Number(inputValue);
      }
      if (inputComparison === 'menor que') {
        return Number(element[inputColumn]) < Number(inputValue);
      }
      if (inputComparison === 'igual a') {
        return element[inputColumn] === inputValue;
      }
      return [];
    });
    setFiltredArray(filtered);
  };

  const removeOption = () => {
    const newArrayOptions = arrayOptions.filter((element) => element !== inputColumn);
    setArrayOptions(newArrayOptions);
    setInputColumn(newArrayOptions[0]);
    setFilters({ ...filters,
      filterByNumericValues: [...filterByNumericValues,
        { column: inputColumn,
          comparison: inputComparison,
          value: inputValue }] });
  };

  return (
    <div>

      <form>
        <select
          data-testid="column-filter"
          onChange={ ({ target: { value } }) => setInputColumn(value) }
        >
          {arrayOptions.map((option) => (<option key={ option }>{ option }</option>))}
        </select>

        <select
          data-testid="comparison-filter"
          onChange={ ({ target: { value } }) => setInputComparison(value) }
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>

        <input
          data-testid="value-filter"
          type="number"
          onChange={ ({ target: { value } }) => setInputValue(value) }
        />

        <button
          data-testid="button-filter"
          type="button"
          onClick={ () => {
            filterNumeric();
            removeOption();
          } }
        >
          Filtrar

        </button>
      </form>
      {filterByNumericValues.map(({ column, comparison, value }, index) => (
        <h4 key={ index }>
          {`${column} ${comparison} ${value} `}
        </h4>))}
    </div>

  );
}

export default NumericFilter;
