import React, { useContext } from 'react';
import Context from '../context/Context';

function Header() {
  const { filter, setFilter } = useContext(Context);
  const { filters } = filter;
  const { filterByName } = filters;
  const { name } = filterByName;
  return (
    <header>
      <h1>Projeto Star Wars - Trybe</h1>
      <label htmlFor="search">
        <input
          type="text"
          name="search"
          data-testid="name-filter"
          value={ name }
          onChange={ (e) => setFilter({ filters: {
            filterByName: {
              name: e.target.value,
            },
          } }) }
        />
      </label>
    </header>
  );
}

export default Header;
