import React, { useState, useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import ResetFilters from './ResetFilters';

const selectComparisonList = ['maior que', 'menor que', 'igual a'];

export default function FilterByNumber() {
  const { numberFilter, setPlanetsFilter, thePlanets, principalColumns, setColumns,
    filterObj } = useContext(PlanetsContext);
  const { filterByNumericValues } = filterObj.filters;

  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('0');

  const handleClick = () => {
    numberFilter({ column, comparison, value });

    const filterByNumeric = thePlanets.filter((planet) => {
      if (comparison === 'maior que') {
        return Number(planet[column]) > Number(value);
      }
      if (comparison === 'menor que') {
        return Number(planet[column]) < Number(value);
      }
      if (comparison === 'igual a') {
        return Number(planet[column]) === Number(value);
      }
      return null;
    });
    const newColumns = principalColumns.filter((columnItem) => columnItem !== column);
    setPlanetsFilter(filterByNumeric);
    setColumns(newColumns);
  };

  const removeFilter = () => {
    setPlanetsFilter(thePlanets);
  };
  console.log(filterByNumericValues);

  return (
    <div>
      <form action="">
        <select
          data-testid="column-filter"
          value={ column }
          onChange={ ({ target: { value: targetValue } }) => setColumn(targetValue) }
        >
          {principalColumns.map((item) => (
            <option key={ item }>{ item }</option>
          ))}
        </select>
        <select
          data-testid="comparison-filter"
          value={ comparison }
          onChange={ ({ target: { value: targetValue } }) => setComparison(targetValue) }
        >
          {selectComparisonList.map((item) => (
            <option key={ item }>{ item }</option>
          ))}
        </select>
        <input
          data-testid="value-filter"
          type="number"
          value={ value }
          onChange={ ({ target: { value: targetValue } }) => setValue(targetValue) }
        />
        <button
          data-testid="button-filter"
          type="button"
          onClick={ () => handleClick() }
        >
          Filtrar
        </button>
      </form>
      <div>
        { filterByNumericValues.map((item) => (
          <ResetFilters
            key={ item.value }
            columns={ item }
            removeFilter={ removeFilter }
          />))}
      </div>
    </div>
  );
}
