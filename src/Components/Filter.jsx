import React, { useContext, useState } from 'react';
import MyContext from '../context/MyContext';

export default function Filters() {
  const { data,
    filteredData,
    setFilteredData,
    searchInput,
    updateSearchInput,
  } = useContext(MyContext);
  const [columnFilter, updateColumnFilter] = useState('population');
  const [comparisonFilter, updateComparisonFilter] = useState('maior que');
  const [valueFilter, updateValueFilter] = useState(0);

  function handleInputChange({ target }) {
    console.log(comparisonFilter);
    updateSearchInput(target.value.toLowerCase());
  }

  function numberFilter() {
    console.log(filteredData.length);
    switch (comparisonFilter) {
    case 'maior que':
      return data.filter((planet) => planet[columnFilter] > parseInt(valueFilter, 10));
    case 'menor que':
      return data.filter((planet) => planet[columnFilter] < parseInt(valueFilter, 10));
    case 'igual a':
      return data.filter((planet) => planet[columnFilter] === valueFilter);
    default:
      return [];
    }
  }

  function handleClick() {
    setFilteredData(numberFilter());
    console.log(filteredData.length);
  }

  return (
    <div>
      <input
        type="text"
        onChange={ handleInputChange }
        value={ searchInput }
        data-testid="name-filter"
      />
      <select
        data-testid="column-filter"
        onChange={ ({ target }) => updateColumnFilter(target.value) }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>

      <select
        data-testid="comparison-filter"
        onChange={ ({ target }) => updateComparisonFilter(target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <input
        type="number"
        data-testid="value-filter"
        onChange={ ({ target }) => updateValueFilter(target.value) }
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Pesquisar

      </button>
    </div>
  );
}
