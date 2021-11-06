import React, { useContext, useState } from 'react';
import DataContext from '../context/DataContext';

const COLUMNS_STATE = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const LOCAL_FILTERS_STATE = {
  column: 'population',
  comparison: 'maior que',
  value: '100000',
};

const Filters = () => {
  const [columns, setColumns] = useState(COLUMNS_STATE);
  const [localFilters, setLocalFilters] = useState(LOCAL_FILTERS_STATE);
  const { pushOnFilters } = useContext(DataContext);

  const handleLocalFilters = ({ target: { name, value } }) => {
    setLocalFilters({
      ...localFilters,
      [name]: value,
    });
  };

  const { column, comparison, value } = localFilters;

  const options = () => {
    const noRepetedColumn = columns
      .filter((c) => c !== column);
    setColumns(noRepetedColumn);
  };

  const filterBtn = () => {
    const newFilter = {
      column,
      comparison,
      value,
    };
    pushOnFilters(newFilter);
    options();
  };

  return (
    <div>
      <form>
        <label htmlFor="column">
          <select
            name="column"
            data-testid="column-filter"
            defaultValue={ columns[0] }
            onChange={ handleLocalFilters }
          >
            { columns.map((col) => (<option key={ col } value={ col }>{ col }</option>)) }
          </select>
        </label>
        <label htmlFor="comparison">
          <select
            name="comparison"
            data-testid="comparison-filter"
            defaultValue={ comparison }
            onChange={ handleLocalFilters }
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>
        <label htmlFor="value">
          <input
            name="value"
            type="number"
            value={ value }
            onChange={ handleLocalFilters }
            data-testid="value-filter"
          />
        </label>
      </form>
      <button
        type="button"
        onClick={ filterBtn }
        data-testid="button-filter"
      >
        Filtrar
      </button>
    </div>
  );
};

export default Filters;
