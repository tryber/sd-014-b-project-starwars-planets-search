import React, { useContext } from 'react';
import PlanetContext from '../../context/PlanetContext';

function Filter() {
  const {
    filters: { filterByNumericValues },
    filters,
    setFilters } = useContext(PlanetContext);

  function handleClick({ target }) {
    const t = filterByNumericValues
      .filter((_, index) => index !== Number(target.parentElement.id));
    setFilters({
      ...filters,
      filterByNumericValues: t,
    });
  }

  // console.log(filtersMade);

  return (
    <ul>
      {
        filterByNumericValues.map(({ column, comparison, value }, index) => (
          <li key={ index } data-testid="filter" id={ index }>
            {`${column} ${comparison} ${value}`}
            <button type="button" onClick={ handleClick }>X</button>
          </li>
        ))
      }
    </ul>
  );
}

export default Filter;
