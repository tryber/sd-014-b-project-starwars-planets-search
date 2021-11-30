import React from 'react';
import { ProviderApp } from '../context/ProviderApp';

const Filter = () => {
  const { filters: { name }, setFilter } = ProviderApp();

  return (
    <header>
      <h1>Star Wars: The turma 15 Menace</h1>
      <form>
        <label htmlFor="searchInput">
          <input
            id="searchInput"
            type="text"
            data-testid="name-filter"
            value={ name }
            onChange={ (event) => setFilter(event.target.value) }
            placeholder="Digite o nome de um planeta"
          />
        </label>
      </form>
    </header>
  );
};

export default Filter;
