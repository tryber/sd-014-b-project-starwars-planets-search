import React, { useContext } from 'react';
import ContextPlanets from '../context/ContextPlanets';

const Header = () => {
  const { filter, getPlanetName } = useContext(ContextPlanets);
  const { filters: { filterByName: { name } } } = filter;

  const handleChange = ({ target }) => {
    getPlanetName(target.value);
  };

  return (
    <header>
      <h1>Projeto Star Wars Trybe</h1>
      <input
        type="text"
        onChange={ handleChange }
        value={ name }
        data-testid="name-filter"
      />
    </header>
  );
};

export default Header;
