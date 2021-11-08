import React, { useContext, useState } from 'react';
import DropDown from './DropDown';

import tableContext from '../context/tableContext';

export default function Filter() {
  const { filters, setFilter } = useContext(tableContext);

  const [selectedColumFilter, setColum] = useState();
  const [selectedComparatorOptions, setComparsion] = useState();
  const [value, setValue] = useState();

  const columFilter = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const comparatorOptions = [
    'maior que',
    'menor que',
    'igual a',
  ];

  const handleInputValue = ({ target: { value: inputValue } }) => setValue(inputValue);

  const submitFilters = () => {
    setFilter({ ...filters,
      filterByNumericValues: [{
        column: selectedColumFilter, comparison: selectedComparatorOptions, value }] });
  };

  return (
    <div>
      <DropDown
        array={ columFilter }
        name="columFilter"
        dataTest="column-filter"
        handleChange={ setColum }
      />
      <DropDown
        array={ comparatorOptions }
        name="comparator"
        dataTest="comparison-filter"
        handleChange={ setComparsion }
      />
      <input
        type="number"
        data-testid="value-filter"
        onChange={ (e) => handleInputValue(e) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ submitFilters }
      >
        Adicionar filtro
      </button>
    </div>
  );
}
