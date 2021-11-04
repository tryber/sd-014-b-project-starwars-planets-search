import React, { useContext } from 'react';
import DataContext from '../context/DataContext';

const Filters = () => {
  const { filters: {
    filters: {
      filterByNumericValues: {
        column,
        comparison,
        value,
      },
    },
  }, handleFilters, handleFilterByNumericValues } = useContext(DataContext);
  return (
    <div>
      <form>
        <label htmlFor="column">
          <select
            name="column"
            data-testid="column-filter"
            defaultValue={ column }
            onChange={ handleFilters }
          >
            <option value="population">population</option>
            <option value="orbital_period">orbital_period</option>
            <option value="diameter">diameter</option>
            <option value="rotation_period">rotation_period</option>
            <option value="surface_water">surface_water</option>
          </select>
        </label>
        <label htmlFor="comparison">
          <select
            name="comparison"
            data-testid="comparison-filter"
            defaultValue={ comparison }
            onChange={ handleFilters }
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
            onChange={ handleFilters }
            data-testid="value-filter"
          />
        </label>
      </form>
      <button
        type="button"
        onClick={ handleFilterByNumericValues }
        data-testid="button-filter"
      >
        Filtrar
      </button>
    </div>
  );
};

export default Filters;
