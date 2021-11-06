import React, { useState } from 'react';
import { useFilters } from '../context/Filters';

const NumericFilter = () => {
  const { filters, setFilters } = useFilters();

  const { filterByNumericValues } = filters;

  const columnOptions = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

  const firstColumnOptionsDisplayed = columnOptions.map((option, index) => (
    <option key={ index } value={ option }>{ option }</option>
  ));

  const [componentValues, setComponentValues] = useState({
    columnValue: 'population',
    comparisonValue: 'bigger-than',
    inputValue: '0',
    columnOptionsDisplayed: firstColumnOptionsDisplayed,
  });

  const {
    columnValue, comparisonValue, inputValue, columnOptionsDisplayed,
  } = componentValues;

  const createValidColumnOptions = () => {
    const usedColumnOptions = filterByNumericValues.map((filter) => filter.column);
    const validColumnOptions = columnOptions.filter(
      (option) => !(usedColumnOptions.includes(option)),
    );
    const newColumnOptionsDisplayed = validColumnOptions.map((validOption, index) => {
      if (index === 0 && columnValue !== validOption) {
        setComponentValues({ ...componentValues, columnValue: validOption });
      }
      return (<option key={ index } value={ validOption }>{ validOption }</option>);
    });
    setComponentValues({
      ...componentValues, columnOptionsDisplayed: newColumnOptionsDisplayed,
    });
  };

  const addFilter = () => {
    const numericFiltersArray = filterByNumericValues;
    const newNumericFilter = {
      column: columnValue, comparison: comparisonValue, value: inputValue };
    numericFiltersArray.push(newNumericFilter);
    setFilters({ ...filters, filterByNumericValues: numericFiltersArray });
    createValidColumnOptions();
  };

  return (
    <section>
      <select
        data-testid="column-filter"
        value={ columnValue }
        onChange={ ({ target }) => setComponentValues(
          { ...componentValues, columnValue: target.value },
        ) }
      >
        { columnOptionsDisplayed }
      </select>

      <select
        data-testid="comparison-filter"
        value={ comparisonValue }
        onChange={ ({ target }) => setComponentValues(
          { ...componentValues, comparisonValue: target.value },
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
          { ...componentValues, inputValue: target.value },
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
