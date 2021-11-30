import React, { useState, useContext } from 'react';
import appContext from '../context/Context';

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
      <label htmlFor="order">
        <select name="order" id="order" data-testid="column-sort">
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <label htmlFor="radio-asc">
        Ascendente
        <input
          type="radio"
          name="radio-order"
          id="radio-asc"
          testid="column-sort-input-asc"
        />
      </label>
      <label htmlFor="radio-desc">
        Descendente
        <input
          type="radio"
          name="radio-order"
          id="radio-desc"
          testid="column-sort-input-desc"
        />
      </label>
      <button
        name="Filtar"
        id="Filtar"
        type="button"
        data-testid="column-sort-button"
      >
        Ordenar
      </button>
    </div>
  );
}
