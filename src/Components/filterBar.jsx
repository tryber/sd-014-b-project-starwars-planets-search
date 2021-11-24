import React from 'react';
import usePlanets from '../hook';

export default function FilterBar() {
  const { filter, setFilter } = usePlanets();
  return (
    <input
      placeholder="Filtrar por Nome"
      name="filter"
      value={ filter }
      onChange={ ({ target: { value } }) => { setFilter(value); } }
    />
  );
}
