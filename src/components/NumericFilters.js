import React, { useContext } from 'react';
import DataContext from '../context/DataContext';

function NumericFilters() {
  const {
    data,
    setFilter,
    columns,
    setColumns,
    compairsonFilter,
    setCompairsonFilter,
    value,
    setValue,
    initialColumns,
    setInitialColumns,
  } = useContext(DataContext);

  const handleClick = () => {
    const filteredPlanets = data.filter((planet) => {
      if (compairsonFilter === 'maior que') {
        return Number(planet[columns]) > Number(value);
      }
      if (compairsonFilter === 'menor que') {
        return Number(planet[columns]) < Number(value);
      }
      if (compairsonFilter === 'igual a') {
        return Number(planet[columns]) === Number(value);
      }
      return null;
    });
    const newColumn = initialColumns.filter((item) => item !== columns);
    setInitialColumns(newColumn);
    setFilter(filteredPlanets);
  };

  return (
    <form>
      <select
        data-testid="column-filter"
        onChange={ ({ target }) => setColumns(target.value) }
      >
        { initialColumns.map((column, i) => (<option key={ i }>{column}</option>))}
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ ({ target }) => setCompairsonFilter(target.value) }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        data-testid="value-filter"
        type="number"
        onChange={ ({ target }) => setValue(target.value) }
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

export default NumericFilters;
