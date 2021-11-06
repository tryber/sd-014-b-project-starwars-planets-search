import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import Input from './Input';

export default function FormsPlanets() {
  const {
    filters: { filterByName: { name } },
    filterByNamePlanets,
  } = useContext(PlanetsContext);

  return (
    <form>
      <Input
        type="text"
        name="name-filter"
        id="name-filter"
        placeholder="Pesquisar por nomes de planetas"
        onChange={ ({ target }) => filterByNamePlanets(target.value) }
        value={ name }
      />
    </form>
  );
}
