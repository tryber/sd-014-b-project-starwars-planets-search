import React from 'react';

import AppContext from '../context/index';

const Filter = () => {
  const columns = ['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water'];
  const comparisonFilters = ['maior que', 'menor que', 'igual a'];

  const [renderColumns, setRenderColumns] = React.useState(columns);

  const [columnsFilter, setColumnsFilter] = React.useState('population');
  const [comparisonFilter, setComparisonFilter] = React.useState('maior que');
  const [numberFilter, setNumberFilter] = React.useState('');

  const { data, setFilterInput } = React.useContext(AppContext);

  const applyFilter = () => {
    const filteredData = data
      .filter((columnFilter) => {
        if (comparisonFilter === 'maior que') {
          return Number(columnFilter[columnsFilter]) > Number(numberFilter);
        } if (comparisonFilter === 'menor que') {
          return Number(columnFilter[columnsFilter]) < Number(numberFilter);
        } if (comparisonFilter === 'igual a') {
          return Number(columnFilter[columnsFilter]) === Number(numberFilter);
        }
        return columnFilter;
      });

    setRenderColumns(renderColumns.filter((column) => column !== columnsFilter));
    setFilterInput(filteredData);
  };

  return (
    <div>
      <select
        data-testid="column-filter"
        onChange={ ({ target }) => setColumnsFilter(target.value) }
      >
        {renderColumns.map((column) => (
          <option
            key={ column }
          >
            {column}

          </option>
        ))}
      </select>

      <select
        data-testid="comparison-filter"
        onChange={ ({ target }) => setComparisonFilter(target.value) }
      >
        {comparisonFilters.map((cFilter) => (
          <option
            key={ cFilter }
          >
            {cFilter}

          </option>
        ))}
      </select>
      <input
        data-testid="value-filter"
        type="number"
        onChange={ ({ target }) => setNumberFilter(target.value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ applyFilter }
      >
        Filtrar

      </button>
    </div>
  );
};

export default Filter;
