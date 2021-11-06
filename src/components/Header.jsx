import React from 'react';
import { useFilters } from '../context/Filters';
import NumericFilter from './NumericFilter';
import NumericFilterTags from './NumericFilterTags';
import Sort from './Sort';

const Header = () => {
  const { filters, setFilters } = useFilters();

  const inputValue = filters.filterByName.name;

  return (
    <header>
      <h1>Projeto Star Wars - Trybe</h1>
      <input
        type="text"
        placeholder="Filtrar por nome"
        data-testid="name-filter"
        value={ inputValue }
        onChange={ ({ target: { value } }) => setFilters(
          { ...filters, filterByName: { name: value } },
        ) }
      />
      <NumericFilter />
      <NumericFilterTags />
      <Sort />
    </header>
  );
};

export default Header;
