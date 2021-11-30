import React from 'react';
import { ProviderApp } from '../context/ProviderApp';

const magicNumber = -1;

const FilterSort = () => {
  const {
    apiResponse,
    setApiResponse,
    ascOrDsc,
    setAscOrDsc,
    columSort,
    setColumSort } = ProviderApp();

  function handleClick() {
    const negativeOrPositive = ascOrDsc === 'ASC' ? 1 : magicNumber;
    const sortResponse = [...apiResponse]
      .sort((a, b) => ((Number(a[columSort]) > Number(b[columSort])
        ? negativeOrPositive
        : -negativeOrPositive)));
    setApiResponse(sortResponse);
  }

  return (
    <div>
      <select
        data-testid="column-sort"
        onChange={ (event) => setColumSort(event.target.value) }
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
          type="radio"
          name="input-asc"
          id="ASC"
          value="ASC"
          data-testid="column-sort-input-asc"
          onClick={ () => setAscOrDsc('ASC') }
        />
      </label>
      <label htmlFor="DSC">
        DESC
        <input
          type="radio"
          name="input-desc"
          id="DSC"
          value="DSC"
          data-testid="column-sort-input-desc"
          onClick={ () => setAscOrDsc('DSC') }
        />
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ () => handleClick() }
      >
        Filtrar
      </button>
    </div>
  );
};

// https://github.com/tryber/sd-014-b-project-starwars-planets-search/pull/114/files
// parte do req 5 e 6 com base no projeto do joao pedro reis

export default FilterSort;
