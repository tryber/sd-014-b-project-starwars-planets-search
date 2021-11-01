import React from 'react';
import usePlanets from '../hooks/usePlanets';

export default function Header() {
  const { filters, setFilters } = usePlanets();

  return (
    <div>
      <h1>Projeto Star Wars - Trybe</h1>
      <input
        data-testid="name-filter"
        type="text"
        value={ filters.filterByName.name }
        onChange={ ({ target: { value } }) => {
          setFilters({ filterByName: { name: value } });
        } }
        placeholder="Filtrar por nome"
      />
    </div>
  );
}
