import React, { useContext, useEffect, useState } from 'react';
import Select from './Select';
import PlanetsTableContext from '../contexts';
import getArrayDifference from '../utils/arrays';

export default function NumericFilter() {
  const {
    filters,
    numericOptions,
    numericComparisons,
    setFilters,
  } = useContext(PlanetsTableContext);

  const numericComparisonsLabels = Object.keys(numericComparisons);

  const [inputValues, setInputValues] = useState({
    column: numericOptions[0],
    comparison: numericComparisonsLabels[0],
    value: '',
  });

  const [numericOptionsToShow, setNumericOptionsToShow] = useState([...numericOptions]);

  function getActiveNumericFilters() {
    const { filterByNumericValues } = filters;

    return filterByNumericValues.map(({ column }) => column);
  }

  useEffect(() => {
    const activeNumericFilters = getActiveNumericFilters();
    const newNumericOptionsToShow = getArrayDifference(
      numericOptions,
      activeNumericFilters,
    );
    setNumericOptionsToShow(newNumericOptionsToShow);
    setInputValues({ ...inputValues, column: newNumericOptionsToShow[0] });
  }, [filters]);

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
        options={ numericOptionsToShow }
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
        disabled={ !numericOptionsToShow.length }
        data-testid="button-filter"
      >
        Filtrar
      </button>
    </div>
  );
}
