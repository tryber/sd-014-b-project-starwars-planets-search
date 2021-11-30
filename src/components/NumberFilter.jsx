import React, { useState, useContext } from 'react';
import appContext from '../context/Context';
import OrderFilter from './OrderFilter';

export default function NumberFilter() {
  const {
    dataFiltered,
    setData,
    columns,
    setColumns,
    filter,
    setFilter,
  } = useContext(appContext);

  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [numericFilter, setNumericFilter] = useState('');

  const handleClick = () => {
    setFilter({
      filters: {
        ...filter.filters,
        filterByNumericValues: [
          ...filter.filters.filterByNumericValues,
          { column, comparison, numericFilter },
        ],
      },
    });
    const filterByNumeric = dataFiltered.filter((planet) => {
      if (comparison === 'maior que') {
        return Number(planet[column]) > Number(numericFilter);
      }
      if (comparison === 'menor que') {
        return Number(planet[column]) < Number(numericFilter);
      }
      if (comparison === 'igual a') {
        return Number(planet[column]) === Number(numericFilter);
      }
      return null;
    });
    // Requisito 4 feito ao reflexo do código de Michael Caxias
    const newColumns = columns.filter((columnItem) => columnItem !== column);
    setData(filterByNumeric);
    setColumns(newColumns);
  };

  return (
    <div>
      <label htmlFor="coluns">
        <select
          name="coluns"
          id="coluns"
          data-testid="column-filter"
          onChange={ (e) => setColumn(e.target.value) }
        >
          { columns.map((item) => (
            <option key={ item }>{ item }</option>
          )) }
        </select>
      </label>
      <label htmlFor="comparison">
        <select
          name="comparison"
          id="comparison"
          data-testid="comparison-filter"
          onChange={ (e) => setComparison(e.target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <label htmlFor="valueField">
        <input
          name="valueField"
          id="valueField"
          type="text"
          data-testid="value-filter"
          onChange={ (e) => setNumericFilter(e.target.value) }
        />
      </label>
      <button
        name="Filtar"
        id="Filtar"
        type="button"
        data-testid="button-filter"
        onClick={ () => handleClick() }
      >
        Filtrar
      </button>
      <OrderFilter />
    </div>
  );
}
