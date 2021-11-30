import React, { useState, useContext } from 'react';
import planetContext from '../context/planetContext';

function NumericFilter() {
  const INIT_FILTER = {
    column: 'population',
    comparison: 'maior que',
    value: '0',
  };
  const INIT_COLUMN_OPTIONS = ['population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water'];

  const {
    handleFilterValues,
    deleteFilterNumeric,
    filterByNumericValues,
  } = useContext(planetContext);

  const [filterNumeric, setFilterNumeric] = useState(INIT_FILTER);
  const [columnOptions, setColumnOptions] = useState(INIT_COLUMN_OPTIONS);

  const handleChange = ({ target }) => {
    setFilterNumeric({
      ...filterNumeric,
      [target.name]: target.value,
    });
  };

  const submitFilterValues = () => {
    handleFilterValues(filterNumeric);
    const newOptions = [...columnOptions];
    newOptions.splice(columnOptions.indexOf(filterNumeric.column), 1);
    setColumnOptions(newOptions);
  };

  const removeNumericFilter = (column) => {
    const updateOptions = [...columnOptions, column];
    setColumnOptions(updateOptions);
    deleteFilterNumeric(column);
  };

  return (
    <section>
      <select data-testid="column-filter" name="column" onChange={ handleChange }>
        {
          columnOptions.map((option) => (
            <option value={ option } key={ option }>{ option }</option>
          ))
        }
      </select>

      <select data-testid="comparison-filter" name="comparison" onChange={ handleChange }>
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <input
        type="number"
        data-testid="value-filter"
        name="value"
        onChange={ handleChange }
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ submitFilterValues }
      >
        Filtrar
      </button>

      <section>
        {
          filterByNumericValues.map(({ column, comparison, value }, index) => (
            <div key={ index } data-testid="filter">
              { `${column} ${comparison} ${value}` }
              <button
                type="button"
                onClick={ () => removeNumericFilter(column) }
              >
                X
              </button>
            </div>
          ))
        }
      </section>
    </section>
  );
}

export default NumericFilter;
