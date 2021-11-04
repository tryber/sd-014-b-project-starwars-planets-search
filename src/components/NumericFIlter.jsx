import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const selectComparisonList = ['maior que', 'menor que', 'igual a'];

export default function NumericFIlter() {
  const { setFilteredData,
    setNumericFilter, filteredData, columns, setColumns } = useContext(PlanetsContext);
  const [columnInput, setColumnInput] = useState(columns[0]);
  const [comparisonInput, setComparisonInput] = useState(selectComparisonList[0]);
  const [valueInput, setValueInput] = useState('');

  const handleClick = () => {
    setNumericFilter({
      value: Number(valueInput),
      column: columnInput,
      comparison: comparisonInput });

    const filterByNumeric = filteredData.filter((planet) => {
      if (comparisonInput === 'maior que') {
        return Number(planet[columnInput]) > valueInput;
      }
      if (comparisonInput === 'menor que') {
        return Number(planet[columnInput]) < valueInput;
      }
      if (comparisonInput === 'igual a') {
        return Number(planet[columnInput]) === valueInput;
      }
      return null;
    });
    const newColumns = columns.filter((columnItem) => columnItem !== columnInput);
    setColumns(newColumns);
    setFilteredData(filterByNumeric);
    setValueInput('');
  };

  return (
    <form>
      <select
        data-testid="column-filter"
        value={ columnInput }
        onChange={ ({ target: { value: targetValue } }) => setColumnInput(targetValue) }
      >
        {columns.map((item) => (
          <option key={ item }>{item}</option>
        ))}
      </select>
      <select
        data-testid="comparison-filter"
        value={ comparisonInput }
        onChange={ ({ target: { value: targetValue } }) => (
          setComparisonInput(targetValue)) }
      >
        {selectComparisonList.map((item) => (
          <option key={ item }>{item}</option>
        ))}
      </select>
      <input
        data-testid="value-filter"
        type="number"
        placeholder="digite um número"
        value={ valueInput }
        onChange={ ({ target: { value: targetValue } }) => (
          setValueInput(Number(targetValue))) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar

      </button>
    </form>
  );
}
