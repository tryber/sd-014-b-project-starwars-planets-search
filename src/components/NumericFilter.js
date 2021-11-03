import React, { useContext, useState } from 'react';
import Select from './Select';
import PlanetsTableContext from '../contexts';

export default function NumericFilter() {
  const {
    filters,
    setFilters,
    numericOptions,
    numericComparisons,
  } = useContext(PlanetsTableContext);
  const numericComparisonsLabels = Object.keys(numericComparisons);
  const [inputValues, setInputValues] = useState({
    column: numericOptions[0],
    comparison: numericComparisonsLabels[0],
    value: '',
  });

  function handleChange({ target: { name, value } }) {
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  }

  function handleClick() {
    const { filterByNumericValues } = filters;

    setFilters({
      ...filters,
      filterByNumericValues: [...filterByNumericValues, inputValues],
    });
  }

  return (
    <div>
      <Select
        name="column"
        options={ numericOptions }
        onChange={ (event) => handleChange(event) }
        data-testid="column-filter"
      />
      <Select
        name="comparison"
        options={ numericComparisonsLabels }
        onChange={ (event) => handleChange(event) }
        data-testid="comparison-filter"
      />
      <input
        name="value"
        type="number"
        onChange={ (event) => handleChange(event) }
        data-testid="value-filter"
      />
      <button
        type="button"
        onClick={ handleClick }
        data-testid="button-filter"
      >
        Filtrar
      </button>
    </div>
  );
}
