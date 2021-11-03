import React, { useContext } from 'react';
import StarwarsContext from '../context/StarwarsContext';
import { comparisonFilter } from '../services/data';
import SelectGenerator from './SelectGenerator';

export default function Header() {
  const {
    filters,
    setFilters,
    filterStarwarsComparison,
    setStateComparison,
    stateComparison,
    columns,
    filterStarwarsPlanetByName,
  } = useContext(StarwarsContext);
  const { filterByName } = filters;

  const updateFiltersByName = (e) => {
    filterStarwarsPlanetByName(e);
    setFilters({
      ...filters,
      filterByName: {
        name: e.target.value,
      },
    });
  };

  const updateFiltersByOptions = (e) => {
    const { name, value } = e.target;

    setStateComparison({
      ...stateComparison,
      [name]: value,
    });
  };

  return (
    <header>
      <div>
        <h1>Projeto Star Wars - Trybe</h1>
        <input
          type="text"
          name="name"
          id="search"
          data-testid="name-filter"
          placeholder="Buscar por nome"
          value={ filterByName.name }
          onChange={ updateFiltersByName }
        />
      </div>
      <div>
        <SelectGenerator
          handleChange={ updateFiltersByOptions }
          value={ stateComparison.column }
          options={ columns }
          name="column"
          dataID="column-filter"
        />
        <SelectGenerator
          handleChange={ updateFiltersByOptions }
          value={ stateComparison.comparison }
          options={ comparisonFilter }
          name="comparison"
          dataID="comparison-filter"
        />
        <input
          type="text"
          name="value"
          id="valueFilter"
          data-testid="value-filter"
          placeholder="Insira um número"
          value={ stateComparison.value }
          onChange={ updateFiltersByOptions }
        />
        <button
          data-testid="button-filter"
          type="button"
          onClick={ filterStarwarsComparison }
        >
          Filtrar
        </button>
      </div>
    </header>
  );
}
