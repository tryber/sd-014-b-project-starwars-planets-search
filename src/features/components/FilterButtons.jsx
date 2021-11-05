import React, { useContext } from 'react';
import { PlanetFinderContext } from '../../context/PlanetFinderContext';

export default function FilterButtons() {
  const {
    filters: { filterByNumericValues },
    setters: { setFilterByNumericValues },
  } = useContext(PlanetFinderContext);

  const handleClick = (column) => {
    const updatedFilter = filterByNumericValues.filter(
      (filter) => filter.column !== column,
    );
    setFilterByNumericValues(updatedFilter);
  };

  return (
    <div>
      {filterByNumericValues.map(({ column, comparison, value }) => (
        <span data-testid="filter" key={ `${column} ${comparison} ${value}` }>
          {`${column} ${comparison} ${value}`}
          <button type="button" onClick={ () => handleClick(column) }>
            X
          </button>
        </span>
      ))}
    </div>
  );
}
