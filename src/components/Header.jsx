import React, { useContext } from 'react';
import PlanetsContext from '../Context/StarWarsContext';

const Header = () => {
  const { filters, setFilters } = useContext(PlanetsContext);

  return (
    <header>
      <h1>Projeto Star Wars - Trybe</h1>
      <input
        type="text"
        value={ filters.filterByName }
        placeholder="Filtrar por nome"
        onChange={ (e) => setFilters({
          ...filters,
          filterByName: e.target.value,
        }) }
        data-testid="name-filter"
      />
    </header>
  );
};

export default Header;
