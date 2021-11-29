import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/Planets';

function FilterByNumber() {
  const INITIAL_FILTER = {
    column: 'population',
    comparison: 'maior que',
    value: '0',
  };

  const INITIAL_COLUMN_OPTIONS = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const { handleFilterValues,
    filterByNumericValues,
    deleteNumericFilter,
  } = useContext(PlanetsContext);

  const [numericFilter, setNumericFilter] = useState(INITIAL_FILTER);
  const [columnOptions, setColumnOptions] = useState(INITIAL_COLUMN_OPTIONS);

  const handleChange = ({ target }) => {
    setNumericFilter({
      ...numericFilter,
      [target.name]: target.value,
    });
  };

  const submitFilterValues = () => {
    handleFilterValues(numericFilter);
    const newOptions = [...columnOptions];
    newOptions.splice(columnOptions.indexOf(numericFilter.column), 1);
    setColumnOptions(newOptions);
  };

  const removeNumericFilter = (column) => {
    const updateOptions = [...columnOptions, column];
    setColumnOptions(updateOptions);
    deleteNumericFilter(column);
    console.log(column);
  };

  return (
    <section>
      <select data-testid="column-filter" name="column" onChange={ handleChange }>
        {columnOptions.map((option) => (
          <option value={ option } key={ option }>
            {option}
          </option>
        ))}
      </select>

      <select
        data-testid="comparison-filter"
        name="comparison"
        onChange={ handleChange }
      >
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
        {filterByNumericValues.map(({ column, comparison, value }, i) => (
          <div key={ i } data-testid="filter">
            {`${column} ${comparison} ${value}`}
            <button type="button" onClick={ () => removeNumericFilter(column) }>
              X
            </button>
          </div>
        ))}
      </section>
    </section>
  );
}

export default FilterByNumber;
