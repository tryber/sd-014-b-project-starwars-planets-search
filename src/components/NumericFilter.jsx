import React, { useEffect, useState } from 'react';
import { useFilters } from '../context/Filters';

const NumericFilter = () => {
  const { filters, setFilters } = useFilters();

  const { filterByNumericValues } = filters;

  const [componentValues, setComponentValues] = useState({
    columnValue: 'population',
    comparisonValue: 'bigger-than',
    inputValue: '0',
  });

  const { columnValue, comparisonValue, inputValue } = componentValues;

  const addFilter = () => {
    const numericFiltersArray = filterByNumericValues;
    const newNumericFilter = {
      column: columnValue, comparison: comparisonValue, value: inputValue };
    numericFiltersArray.push(newNumericFilter);
    setFilters({ ...filters, filterByNumericValues: numericFiltersArray });
  };

  const columnOptions = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

  const createValidColumnOptions = () => {
    const usedColumnOptions = filterByNumericValues.map((filter) => filter.column);
    const validColumnOptions = columnOptions.filter(
      (option) => !(usedColumnOptions.includes(option)),
    );
    return validColumnOptions.map((validOption, index) => {
      if (index === 0 && columnValue !== validOption) {
        setComponentValues({ columnValue: validOption, comparisonValue, inputValue });
      }
      return (<option key={ index } value={ validOption }>{ validOption }</option>);
    });
  };

  return (
    <section>
      <select
        data-testid="column-filter"
        value={ columnValue }
        onChange={ ({ target }) => setComponentValues(
          { columnValue: target.value, comparisonValue, inputValue },
        ) }
      >
        { createValidColumnOptions() }
      </select>

      <select
        data-testid="comparison-filter"
        value={ comparisonValue }
        onChange={ ({ target }) => setComponentValues(
          { columnValue, comparisonValue: target.value, inputValue },
        ) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <input
        type="number"
        data-testid="value-filter"
        value={ inputValue }
        onChange={ ({ target }) => setComponentValues(
          { columnValue, comparisonValue, inputValue: target.value },
        ) }
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ addFilter }
      >
        Filtrar
      </button>
    </section>
  );
};

export default NumericFilter;
