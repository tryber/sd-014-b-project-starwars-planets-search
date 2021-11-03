import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Header() {
  const { filters: { filterByName: { name } }, setFilters } = useContext(PlanetsContext);

  return (
    <header>
      <h1>Projeto Star Wars - Trybe</h1>
      <input
        type="text"
        placeholder="Filtrar por Nome"
        value={ name }
        data-testid="name-filter"
        onChange={ ({ target: { value } }) => {
          setFilters((prevState) => ({
            ...prevState,
            filterByName: { name: value },
          }));
        } }
      />
    </header>
  );
}

export default Header;
