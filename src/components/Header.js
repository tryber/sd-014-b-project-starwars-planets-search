import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Select from './Select';

const selectComparison = [
  'maior que',
  'menor que',
  'igual a',
];

export default function Header() {
  const { filters, setFilters, handleNumericFilter, selectCategory } = useContext(AppContext);
  const { filterByName } = filters.filters;

  const selectNumericFilterType = (event) => {
    const { name, value } = event.target;
    setFilters({
      filters: { ...filters.filters,
        filterByNumericValues: [{
          ...filters.filters.filterByNumericValues[0],
          [name]: value,
        }],
      },
    });
  };

  return (
    <header>
      <h1>Star Wars Planet Search</h1>
      <input
        type="text"
        name="name"
        data-testid="name-filter"
        placeholder="Buscar Planeta"
        value={ filterByName.name }
        onChange={ ({ target: { value } }) => {
          setFilters({
            filters: { ...filters.filters,
              filterByName: {
                name: value,
              },
            },
          });
        } }
      />
      <Select
        name="column"
        id="column-filter"
        handleChange={ selectNumericFilterType }
        value={ filters.filters.filterByNumericValues[0].column }
        options={ selectCategory }
      />
      <Select
        name="comparison"
        id="comparison-filter"
        handleChange={ selectNumericFilterType }
        value={ filters.filters.filterByNumericValues[0].comparison }
        options={ selectComparison }
      />
      <input
        type="text"
        name="value"
        data-testid="value-filter"
        placeholder="Insert number"
        onChange={ selectNumericFilterType }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleNumericFilter }
      >
        Filtrar
      </button>
    </header>
  );
}
