import React, { useContext } from 'react';
import ActiveNumericFilter from './ActiveNumericFilter';
import PlanetsTableContext from '../contexts';

export default function ActiveNumericFilters() {
  const { filters: { filterByNumericValues } } = useContext(PlanetsTableContext);

  return (
    <div>
      {filterByNumericValues.map(
        (numericFilter, index) => (
          <ActiveNumericFilter
            key={ index }
            numericFilter={ numericFilter }
            index={ index }
          />
        ),
      )}
    </div>
  );
}
