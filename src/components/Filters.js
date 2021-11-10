import React, { useContext } from 'react';
import DataContext from '../context/DataContext';

function Filters() {
  const { data,
    setData,
    column,
    setColumn,
    comparator,
    setComparator,
    comparisonNum,
    setComparisonNum,
    searchColumns,
    setSearchColumns,
  } = useContext(DataContext);

  function comparisonFilter() {
    const filteredByValue = data.filter((planet) => {
      if (comparator === 'maior que') {
        return Number(planet[column]) > Number(comparisonNum);
      }
      if (comparator === 'menor que') {
        return Number(planet[column]) < Number(comparisonNum);
      }
      if (comparator === 'igual a') {
        return Number(planet[column]) === Number(comparisonNum);
      }
      return data;
    });
    const newColumns = searchColumns.filter((current) => current !== column);
    setSearchColumns(newColumns);
    setData(filteredByValue);
  }

  return (
    <span>
      <select
        id="column"
        data-testid="column-filter"
        onChange={ ({ target }) => setColumn(target.value) }
      >
        { searchColumns.map((item, i) => (<option key={ i }>{item}</option>)) }
      </select>
      <select
        id="comparison"
        data-testid="comparison-filter"
        onChange={ ({ target }) => setComparator(target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        id="value"
        type="text"
        data-testid="value-filter"
        placeholder="Valor"
        onChange={ ({ target }) => setComparisonNum(target.value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ comparisonFilter }
      >
        Filtrar
      </button>
    </span>
  );
}

export default Filters;

// Referência: https://github.com/tryber/sd-014-b-project-starwars-planets-search/pull/110/files
