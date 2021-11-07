import React from 'react';
import usePlanets from '../effects/usePlanets';

export default function Input() {
  const { searchTerm, filters, setFilters, setSearchTerm } = usePlanets();

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
