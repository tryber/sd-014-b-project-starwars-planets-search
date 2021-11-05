import React, { useContext, useState } from 'react';
import { PlanetsContext } from '../contexts/PlanetsContext';

function FilterByNumericValues() {
  const { filters, setFilters } = useContext(PlanetsContext);
  const [filterByNumericValues, setFilterByNumericValues] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '',
  });
  const columnsFilter = ['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water'];
  return (
    <>
      <select
        id="column-filter"
        onChange={ (e) => setFilterByNumericValues({
          ...filterByNumericValues,
          column: e.target.value,
        }) }
        data-testid="column-filter"
      >
        { columnsFilter
          .filter((columnFilter) => {
            if (filters.filterByNumericValues.length > 0) {
              return filters.filterByNumericValues
                .every((filter) => columnFilter !== filter.column);
            }
            return true;
          })
          .map((filter) => (
            <option key={ filter } value={ filter }>{ filter }</option>
          ))}
      </select>
      <select
        id="comparison-filter"
        onChange={ (e) => setFilterByNumericValues({
          ...filterByNumericValues,
          comparison: e.target.value,
        }) }
        data-testid="comparison-filter"
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        id="value-filter"
        onChange={ (e) => setFilterByNumericValues({
          ...filterByNumericValues,
          value: e.target.value,
        }) }
        data-testid="value-filter"
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => {
          setFilters({
            ...filters,
            filterByNumericValues: [
              ...filters.filterByNumericValues,
              filterByNumericValues,
            ],
          });
          setFilterByNumericValues((prevState) => ({
            ...prevState,
            column: columnsFilter.find((filter) => filter !== prevState.column),
          }));
        } }
      >
        Filtrar
      </button>
    </>
  );
}

export default FilterByNumericValues;
