import React, { useContext, useState } from 'react';
import MyContext from '../context-api/MyContext';

function NumericFilter() {
  const [inputColumn, setInputColumn] = useState('population');
  const [inputComparison, setInputComparison] = useState('maior que');
  const [inputValue, setInputValue] = useState('');
  const { data, setFiltredArray } = useContext(MyContext);

  const filterNumeric = () => {
    const filtered = data.filter((element) => {
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

  return (
    <form>
      <select
        data-testid="column-filter"
        onChange={ ({ target: { value } }) => setInputColumn(value) }
      >
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
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
        onClick={ filterNumeric }
      >
        Filtrar

      </button>
    </form>
  );
}

export default NumericFilter;
