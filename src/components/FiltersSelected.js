import React, { useContext } from 'react';
import Context from '../context/Context';

function FiltersSelected() {
  const { tableFilters } = useContext(Context);
  const { filters: { filterByNumericValues } } = tableFilters;
  console.log(filterByNumericValues);
  return (
    <div>
      <h3>Filtros:</h3>
      <span>filter.column</span>
      <span> - </span>
      <span>filter.comparison</span>
      <span> - </span>
      <span>filter.value</span>
    </div>
  );
}

export default FiltersSelected;
