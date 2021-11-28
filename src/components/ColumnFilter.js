import React, { useState, useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

const comparative = ['maior que', 'menor que', 'igual a'];

export default function FilterNumeric() {
  const {
    newNumericFilter,
    columns,
    setColumns,
    setPlanetFilter,
    listOfPlanets,
  } = useContext(PlanetContext);

  const [column, setColumn] = useState('population');
  const [comparativeFilter, setComparativeFilter] = useState('maior que');
  const [value, setValue] = useState('0');

  const handleClick = () => {
    newNumericFilter({ column, comparativeFilter, value });
    const filterByNumericValues = listOfPlanets.filter((planet) => {
      if (comparativeFilter === 'maior que') {
        return Number(planet[column]) > Number(value);
      }
      if (comparativeFilter === 'menor que') {
        return Number(planet[column]) < Number(value);
      }
      if (comparativeFilter === 'igual a') {
        return Number(planet[column]) === Number(value);
      }
      return null;
    });
    const newColumns = columns.filter((columnItem) => columnItem !== column);
    setPlanetFilter(filterByNumericValues);
    setColumns(newColumns);
  };

  return (
    <form className="filter-numeric-form">
      <select
        data-testid="column-filter"
        value={ column }
        onChange={ ({ target: { value: targetValue } }) => setColumn(targetValue) }
      >
        {columns.map((item) => (
          <option key={ item }>{item}</option>
        ))}
      </select>
      <select
        data-testid="comparison-filter"
        value={ comparativeFilter }
        onChange={
          ({ target: { value: targetValue } }) => setComparativeFilter(targetValue)
        }
      >
        {comparative.map((item) => (
          <option key={ item }>{item}</option>
        ))}
      </select>
      <input
        data-testid="value-filter"
        type="number"
        value={ value }
        onChange={ ({ target: { value: targetValue } }) => setValue(targetValue) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => handleClick() }
      >
        Filter

      </button>
    </form>
  );
}
