import React, { useContext } from 'react';
import { PlanetsContext } from '../contexts/PlanetsContext';

function FilterByName() {
  const { filters, setFilters } = useContext(PlanetsContext);
  return (
    <input
      type="text"
      id="name-filter"
      value={ filters.filterByName }
      placeholder="Filtrar por nome"
      onChange={ (e) => setFilters({
        ...filters,
        filterByName: e.target.value,
      }) }
      data-testid="name-filter"
    />
  );
}

export default FilterByName;
