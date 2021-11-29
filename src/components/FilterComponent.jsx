import React, { useContext } from 'react';
import myContext from '../context/Context';

function FiltererComponent() {
  const {
    restoreColumns,
    filters,
    deleteFilters,
  } = useContext(myContext);

  console.log(filters);

  return (
    filters.filterByNumericValues.map(({ column, comparison, value }, index) => (
      <div data-testid="filter" key={ column + index } name={ column }>
        <h2>{`Filtro: ${column} ${comparison} ${value}`}</h2>
        <button
          onClick={ () => { restoreColumns(column); deleteFilters(column); } }
          type="button"
        >
          X
        </button>
      </div>
    ))
  );
}

export default FiltererComponent;
