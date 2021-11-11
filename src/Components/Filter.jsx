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

  const comparisons = ['maior que', 'menor que', 'igual a'];
  const columns = ['population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water'];
  const [columnsSearched, setcolumnsSearched] = useState([...columns]);

  function createNewColumns() {
    const newColumn = columns.filter((op) => (op !== columnFilter));
    setcolumnsSearched(newColumn);
  }

  function numberFilter() {
    createNewColumns();
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
        onChange={ ({ target }) => updateSearchInput(target.value.toLowerCase()) }
        value={ searchInput }
        data-testid="name-filter"
      />
      <select
        data-testid="column-filter"
        onChange={ ({ target }) => updateColumnFilter(target.value) }
      >
        {columnsSearched.map((column, i) => (
          <option key={ i }>{ column }</option>
        ))}
      </select>

      <select
        data-testid="comparison-filter"
        onChange={ ({ target }) => updateComparisonFilter(target.value) }
      >
        {comparisons.map((comparison, i) => (
          <option key={ i } value={ comparison }>{ comparison }</option>
        ))}
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
