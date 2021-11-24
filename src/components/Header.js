/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import ContextPlanets from '../context/ContextPlanets';

const Header = () => {
  const { filter, getPlanetName, data, setPlanetFiltered } = useContext(ContextPlanets);
  const { filters: { filterByName: { name } } } = filter;

  const handleChange = ({ target }) => {
    getPlanetName(target.value);
  };

  useEffect(() => {
    const dataFilter = data
      .filter((planet) => planet.name.toLowerCase()
        .includes(name.toLowerCase()));
    setPlanetFiltered(dataFilter);
  }, [name]);

  return (
    <header>
      <h1>Projeto Trybe Wars </h1>
      <input
        type="text"
        onChange={ handleChange }
        value={ name }
        data-testid="name-filter"
        className="input-filter"
        placeholder="Pesquise um nome de Planeta"
      />
    </header>
  );
};

export default Header;
