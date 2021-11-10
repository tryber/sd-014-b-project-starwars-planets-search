import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

export default function Header() {
  const { filters, setFilters } = useContext(AppContext);
  const { filterByName } = filters.filters;
  const { name } = filterByName;

  return (
    <header>
      <h1>Star Wars Planet Search</h1>
      <input
        type="text"
        name="name"
        data-testid="name-filter"
        placeholder="Buscar Planeta"
        value={ name }
        onChange={ ({ target: { value } }) => {
          setFilters({
            filters: { ...filters.filters,
              filterByName: {
                name: value,
              },
            },
          });
        } }
      />
    </header>
  );
}
