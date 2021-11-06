import React, { useState, useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const selectComparationList = ['maior que', 'menor que', 'igual a'];

export default function FilterNumeric() {
  const {
    addFilterNumeric, columns, setColumns, setPlanetsFilter, allPlanets,
  } = useContext(PlanetsContext);

  const [column, setColumn] = useState('population');
  const [comparation, setComparation] = useState('maior que');
  const [value, setValue] = useState('0');

  const handleClick = () => {
    addFilterNumeric({ column, comparation, value });
    const filterByNumeric = allPlanets.filter((planet) => {
      if (comparation === 'maior que') {
        return Number(planet[column]) > Number(value);
      }
      if (comparation === 'menor que') {
        return Number(planet[column]) < Number(value);
      }
      if (comparation === 'igual a') {
        return Number(planet[column]) === Number(value);
      }
      return null;
    });
    const newColumns = columns.filter((columnItem) => columnItem !== column);
    setPlanetsFilter(filterByNumeric);
    setColumns(newColumns);
  };

  return (
    <form className="filter-numeric-form">
      <select
        className="form-control"
        data-testid="column-filter"
        value={ column }
        onChange={ ({ target: { value: targetValue } }) => setColumn(targetValue) }
      >
        {columns.map((item) => (
          <option key={ item }>{item}</option>
        ))}
      </select>
      <select
        className="form-control"
        data-testid="comparison-filter"
        value={ comparation }
        onChange={ ({ target: { value: targetValue } }) => setComparation(targetValue) }
      >
        {selectComparationList.map((item) => (
          <option key={ item }>{item}</option>
        ))}
      </select>
      <input
        className="form-control"
        data-testid="value-filter"
        type="number"
        value={ value }
        onChange={ ({ target: { value: targetValue } }) => setValue(targetValue) }
      />
      <button
        type="button"
        data-testid="button-filter"
        className="btn btn-primary"
        onClick={ () => handleClick() }
      >
        Filtrar

      </button>
    </form>
  );
}
