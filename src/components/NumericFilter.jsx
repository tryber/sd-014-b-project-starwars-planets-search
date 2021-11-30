import React, { useState, useContext } from 'react';
import planetContext from '../context/planetContext';

const selectComparationList = ['maior que', 'menor que', 'igual a'];

export default function FilterNumeric() {
  const {
    numericFilter,
    columns,
    setColumns,
    setFilteredPlanets, planets, orderBy, sortRadio } = useContext(planetContext);

  const [column, setColumn] = useState('population');
  const [orderColumn, setOrderColumn] = useState('population');
  const [comparation, setComparation] = useState('maior que');
  const [value, setValue] = useState();

  const handleClick = () => {
    numericFilter({ column, comparation, value });
    const filterByNumeric = planets.filter((planet) => {
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
    const filteredColums = columns.filter((filteredColumn) => filteredColumn !== column);
    setFilteredPlanets(filterByNumeric);
    setColumns(filteredColums);
  };

  return (
    <form>
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
        value={ comparation }
        onChange={ ({ target: { value: targetValue } }) => setComparation(targetValue) }
      >
        {selectComparationList.map((item) => (
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
        Filtrar
      </button>
      <select
        data-testid="column-sort"
        value={ orderColumn }
        onChange={ ({ target: { value: targetValue } }) => {
          setOrderColumn(targetValue);
          orderBy(orderColumn);
        } }
      >
        {columns.map((item) => (
          <option key={ item }>{item}</option>
        ))}
      </select>
      <label htmlFor="asc">
        ASC
        <input
          data-testid="column-sort-input-asc"
          type="radio"
          name="asc"
          id="asc"
          value="asc"
          onClick={ () => sortRadio('asc') }
        />
      </label>
      <label htmlFor="desc">
        DESC
        <input
          data-testid="column-sort-input-desc"
          type="radio"
          name="desc"
          id="desc"
          value="desc"
          onClick={ () => sortRadio('desc') }
        />
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ () => handleClick() }
      >
        Ordenar
      </button>
    </form>
  );
}
