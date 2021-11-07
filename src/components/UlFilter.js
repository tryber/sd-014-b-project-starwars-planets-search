import React, { useContext } from 'react';
import ContextPlanets from '../context/ContextPlanets';

const UlFilter = () => {
  const { filter } = useContext(ContextPlanets);
  const { filters: { filterByNumericValues } } = filter;

  return (
    <ul>
      { filterByNumericValues.map(({ column, comparison, value }, index) => (
        <li
          key={ index }
          data-testid="filter"
        >
          { column }
          { ' ' }
          { comparison }
          { ' ' }
          { value }
          { ' ' }
          <button
            type="button"
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
};

export default UlFilter;
