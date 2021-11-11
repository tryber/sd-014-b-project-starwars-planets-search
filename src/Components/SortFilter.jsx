import React from 'react';
import { usePlanets } from '../context/usePlanets';

const DSC = -1;

const SortFilter = () => {
  const {
    planets,
    setPlanets,
    sortOrder,
    setSortOrder,
    sortOption,
    setSortOption } = usePlanets();

  function handleFilter() {
    const order = sortOrder === 'ASC' ? 1 : DSC;
    const sortedColumn = [...planets]
      .sort((a, b) => ((Number(a[sortOption]) > Number(b[sortOption])
        ? order
        : -order)));
    setPlanets(sortedColumn);
  }

  return (
    <div>
      <select
        onChange={ ({ target }) => setSortOption(target.value) }
        data-testid="column-sort"
      >
        <option value="population">População</option>
        <option value="orbital_period">Período Orbital</option>
        <option value="diameter">Diâmetro</option>
        <option value="rotation_period">Período Rotacional</option>
        <option value="surface_water">Água Superficial</option>
      </select>
      <label htmlFor="ASC">
        ASC
        <input
          data-testid="column-sort-input-asc"
          name="sort-radios"
          id="ASC"
          type="radio"
          value="ASC"
          onClick={ () => setSortOrder('ASC') }
        />
      </label>
      <label htmlFor="DSC">
        DESC
        <input
          data-testid="column-sort-input-desc"
          name="sort-radios"
          id="DSC"
          type="radio"
          value="DSC"
          onClick={ () => setSortOrder('DSC') }
        />
      </label>
      <button
        onClick={ () => handleFilter() }
        data-testid="column-sort-button"
        type="button"
      >
        Filtrar
      </button>
    </div>
  );
};

export default SortFilter;
