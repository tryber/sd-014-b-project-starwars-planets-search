import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function Input() {
  const { searchTerm, filters, setFilters, setSearchTerm } = useContext(PlanetsContext);

  return (
    <div>
      <input
        data-testid="name-filter"
        value={ searchTerm }
        type="text"
        onChange={ ({ target: { value } }) => {
          setSearchTerm(value);
          setFilters({
            ...filters,
            filterByName: {
              name: searchTerm,
            } });
        } }
      />
    </div>
  );
}
