import React, { useContext } from 'react';
import PlanetsContext from '../context/Context';

function PlanetsSearch() {
  const { nameFilter, setNameFilter } = useContext(PlanetsContext);

  const filterChange = ({ target }) => {
    const { value } = target;
    setNameFilter({
      ...nameFilter,
      filters: {
        filterByName: {
          name: value,
        },
      },
    });
  };
  return (
    <section>
      <input
        data-testid="name-filter"
        type="text"
        name="name"
        id="search"
        placeholder="Pesquisar por nome"
        onChange={ filterChange }
      />
    </section>
  );
}

export default PlanetsSearch;

// Requisito 2 espelhado no projeto do Elton Rodrigues
