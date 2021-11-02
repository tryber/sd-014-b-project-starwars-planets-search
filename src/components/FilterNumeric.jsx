import React, { useState, useContext } from 'react';
import Context from '../context/Context';

function FilterNumeric() {
  const initialFilter = {
    column: 'population',
    comparison: 'maior que',
    value: '0',
  };
  const initialColumnOptions = ['population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water'];

  const { handleFilterValues, filters: { filterByNumericValues } } = useContext(Context);
  const [filterNumeric, setFilterNumeric] = useState(initialFilter);
  const [columnOptions, setColumnOptions] = useState(initialColumnOptions);

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
    console.log(newOptions);
    setColumnOptions(newOptions);
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
          filterByNumericValues.map(({ column, comparison, value }, i) => (
            <div key={ i } data-testid="filter">
              { `${column} ${comparison} ${value}` }
              <button type="button">X</button>
            </div>
          ))
        }
      </section>
    </section>
  );
}

export default FilterNumeric;
