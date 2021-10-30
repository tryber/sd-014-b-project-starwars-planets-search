import React, { useContext } from 'react';
import StarwarsContext from '../context/StarwarsContext';

export default function Header() {
  const { filters, setFilters } = useContext(StarwarsContext);
  const { filterByName } = filters.filters;
  const { name } = filterByName;
  const updateFilters = (e) => {
    setFilters({
      filters: { ...filters.filters,
        filterByName: {
          name: e.target.value,
        },
      },
    });
  };

  return (
    <header>
      <h1>Projeto Star Wars - Trybe</h1>
      <input
        type="text"
        name="name"
        id="search"
        data-testid="name-filter"
        placeholder="Buscar por nome"
        value={ name }
        onChange={ (e) => updateFilters(e) }
      />
    </header>
  );
}
