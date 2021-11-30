import React, { useContext, useState } from 'react';
import { FilterContext } from '../context';

const NumericFilter = () => {
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('>');
  const [value, setValue] = useState('');
  const filters = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const {
    filters: { filterNumericValues },
    setFilterNumericValues,
  } = useContext(FilterContext);
  return (
    <form
      onSubmit={ (e) => {
        e.preventDefault();
        if (column || comparison || value) {
          setFilterNumericValues((prev) => [
            ...prev,
            { column, comparison, value },
          ]);
        }
      } }
      className="numeric-filters"
    >
      <select
        onChange={ (e) => setColumn(e.target.value) }
        value={ column }
        data-testid="column-filter"
      >
        {filters
          .filter(
            (filter) => !filterNumericValues.some(
              (filterObj) => filterObj.column === filter,
            ),
          )
          .map((filter) => (
            <option key={ filter } value={ filter }>
              {filter}
            </option>
          ))}
      </select>

      <select
        onChange={ (e) => setComparison(e.target.value) }
        value={ comparison }
        data-testid="comparison-filter"
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <input
        onChange={ (e) => setValue(e.target.value) }
        value={ value }
        type="number"
        data-testid="value-filter"
      />
      <button data-testid="button-filter" type="submit">
        Filter
      </button>
    </form>
  );
};

export default NumericFilter;
