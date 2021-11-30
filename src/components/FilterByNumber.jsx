import React, { useState, useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const selectComparisonList = ['maior que', 'menor que', 'igual a'];

export default function FilterByNumber() {
  const { numberFilter, setPlanetsFilter, thePlanets, columns, setColumns,
  } = useContext(PlanetsContext);

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
    const newColumns = columns.filter((columnInfo) => columnInfo !== column);
    setPlanetsFilter(filterByNumeric);
    setColumns(newColumns);
  };

  return (
    <form action="">
      <select
        data-testid="column-filter"
        value={ column }
        onChange={ ({ target: { value: targetValue } }) => setColumn(targetValue) }
      >
        {columns.map((item) => (
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
  );
}
