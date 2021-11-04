import React, { useContext } from 'react';
import { PlanetsContext } from '../context/PlanetsProvider';

export default function FilterTag() {
  const { filters, setFilters } = useContext(PlanetsContext);
  const { filterByNumericValues } = filters;

  function removeFilter(filter) {
    setFilters({
      ...filters,
      filterByNumericValues: filterByNumericValues
        .filter(({ column }) => column !== filter),
    });
  }

  return (
    <div>
      { filterByNumericValues.length > 0
        && filterByNumericValues.map(({ column, comparison, value }) => (
          <span data-testid="filter" key={ column }>
            { `${column} ${comparison} ${value}` }
            <button type="button" onClick={ () => removeFilter(column) }>X</button>
          </span>
        )) }
    </div>
  );
}
