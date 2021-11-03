import React, { useContext } from 'react';
import StarwarsContext from '../context/StarwarsContext';
import { columnFilter, comparisonFilter } from '../services/data';
import SelectGenerator from './SelectGenerator';

export default function Header() {
  const { filters, setFilters, filterStarwarsComparison } = useContext(StarwarsContext);
  const { filterByName } = filters;
  const updateFiltersByName = (e) => {
    setFilters({
      ...filters,
      filterByName: {
        name: e.target.value,
      },
    });
  };

  const updateFiltersByOptions = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      filterByNumericValues: [{
        ...filters.filterByNumericValues[0],
        [name]: value,
      }],
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
          value={ filters.filterByNumericValues[0].column }
          options={ columnFilter }
          name="column"
          dataID="column-filter"
        />
        <SelectGenerator
          handleChange={ updateFiltersByOptions }
          value={ filters.filterByNumericValues[0].comparison }
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
