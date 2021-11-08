import React, { useContext } from 'react';
import PlanetsContext from '../context/Context';

function FilterNames() {
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

export default FilterNames;
