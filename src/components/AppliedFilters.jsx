import React, { useContext } from 'react';
import PlanetsContext from '../Context/StarWarsContext';

function AppliedFilters() {
  const { filters, setFilters } = useContext(PlanetsContext);
  return (
    <div>
      { filters.filterByNumericValues.map(({ column, comparison, value }) => (
        <p
          key={ column }
          data-testid="filter"
        >
          { `${column} ${comparison} ${value} ` }
          <button
            type="button"
            onClick={ () => setFilters({
              ...filters,
              filterByNumericValues: [
                ...filters.filterByNumericValues
                  .filter((filter) => filter.column !== column),
              ],
            }) }
          >
            x
          </button>
        </p>
      ))}
    </div>
  );
}

export default AppliedFilters;
