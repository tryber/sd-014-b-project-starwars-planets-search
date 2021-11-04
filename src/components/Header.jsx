import React, { useState } from 'react';
import columnsFilter from '../data/columnsFilter';
import usePlanets from '../hooks/usePlanets';

import styles from '../styles/header.module.scss';

export default function Header() {
  const { filters, setFilters, handleClickDeleteFilter } = usePlanets();
  const [columnFilter, setColumnFilter] = useState(columnsFilter[0]);
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const [valueFilter, setValueFilter] = useState('');

  function renderOptions() {
    const utilizedOptions = filters.filterByNumericValues.map((filter) => filter.column);
    const columnsFiltered = columnsFilter
      .filter((column) => !utilizedOptions.includes(column));
    return columnsFiltered.map((column) => (
      <option value={ column } key={ column }>{column}</option>
    ));
  }

  function renderAppliedFilters() {
    return filters.filterByNumericValues.map((filter, index) => (
      <div key={ index } data-testid="filter" className={ styles.filters }>
        <span>{`${filter.column} `}</span>
        <span>{`${filter.comparison} `}</span>
        <span className={ styles.value }>{`${filter.value} `}</span>
        <button
          type="button"
          onClick={ () => handleClickDeleteFilter(index) }
        >
          X
        </button>
      </div>
    ));
  }

  return (
    <div className={ styles.header }>
      <h1>Star Wars Planets</h1>
      <input
        data-testid="name-filter"
        type="text"
        value={ filters.filterByName.name }
        onChange={ ({ target: { value } }) => {
          setFilters((prevState) => ({ ...prevState, filterByName: { name: value } }));
        } }
        placeholder="Filtrar por nome"
        className={ styles.filterByName }
      />
      <div className={ styles.filterByNumericValues }>
        <select
          data-testid="column-filter"
          name="column-filter"
          value={ columnFilter }
          onChange={ ({ target: { value } }) => setColumnFilter(value) }
        >
          {renderOptions()}
        </select>
        <select
          data-testid="comparison-filter"
          name="comparison-filter"
          value={ comparisonFilter }
          onChange={ ({ target: { value } }) => setComparisonFilter(value) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          data-testid="value-filter"
          type="number"
          value={ valueFilter }
          onChange={ ({ target: { value } }) => setValueFilter(value) }
        />
        <button
          data-testid="button-filter"
          type="button"
          onClick={ () => setFilters((prevState) => ({
            ...prevState,
            filterByNumericValues: [
              ...prevState.filterByNumericValues,
              {
                column: columnFilter,
                comparison: comparisonFilter,
                value: valueFilter,
              },
            ],
          })) }
        >
          Filtrar
        </button>
      </div>
      {filters.filterByNumericValues.length > 0
        && (
          <div>
            <h3>Filtros:</h3>
            <div className={ styles.filtersContainer }>
              {renderAppliedFilters()}
            </div>
          </div>
        )}
    </div>
  );
}
