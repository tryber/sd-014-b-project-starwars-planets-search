import React, { useContext } from 'react';
import Table from './Table';
import ContextPlanets from '../context/ContextPlanets';
import Filter from './Filter';

const Header = () => {
  const { filter, getPlanetName } = useContext(ContextPlanets);
  const { filters: { filterByName: { name } } } = filter;

  const handleChange = ({ target }) => {
    getPlanetName(target.value);
  };

  return (
    <>
      <header>
        <h1>Projeto Star Wars Trybe</h1>
        <input
          type="text"
          onChange={ handleChange }
          value={ name }
          data-testid="name-filter"
        />
      </header>
      <Filter />
      <Table />
    </>
  );
};

export default Header;
