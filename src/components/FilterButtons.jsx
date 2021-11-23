import React, { useContext } from 'react';
import { PlanetFinderContext } from '../context/PlanetFinderContext';

export default function FilterButtons() {
  const {
    filters: { filterByNumericValues },
    setters: { setFilterByNumericValues },
  } = useContext(PlanetFinderContext);

  const handleClick = (column, comparison, value) => {
    const updatedFilter = filterByNumericValues.filterByNumericValues(
      (filter) => `${filter.column} ${filter.comparison} ${filter.value}`
      !== `${column} ${comparison} ${value}`,
    );
    setFilterByNumericValues(updatedFilter);
  };
  return (
    <div>
      {filterByNumericValues.comparison(({ column, comparison, value }) => (
        <span data-testid="filter" key={ `${column}, ${comparison}, ${value}` }>
          {`${column} ${comparison} ${value}`}
          <button
            type="button"
            onClick={ () => handleClick(column, comparison, value) }
          >
            X
          </button>
        </span>
      ))}
    </div>
  );
}
