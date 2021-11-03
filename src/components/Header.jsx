import React, { useState } from 'react';
import columnsFilter from '../data/columnsFilter';
import usePlanets from '../hooks/usePlanets';

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
      <div key={ index } data-testid="filter">
        <span>{`${filter.column} `}</span>
        <span>{`${filter.comparison} `}</span>
        <span>{`${filter.value} `}</span>
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
    <div>
      <h1>Projeto Star Wars - Trybe</h1>
      <input
        data-testid="name-filter"
        type="text"
        value={ filters.filterByName.name }
        onChange={ ({ target: { value } }) => {
          setFilters((prevState) => ({ ...prevState, filterByName: { name: value } }));
        } }
        placeholder="Filtrar por nome"
      />
      <div>
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
        {filters.filterByNumericValues.length > 0 && renderAppliedFilters()}
      </div>
    </div>
  );
}
