import React, { useState, useContext } from 'react';
import NewContext from '../context/NewContext';

function FilterNumbers() {
  const { filterItem, setFilterItem, setComparison } = useContext(NewContext);
  const NumericValues = filterItem.filters.filterByNumericValues;

  const [columnFilter, setColumn] = useState('population');
  const [comparisonFilter, setFilterComparison] = useState('maior que');
  const [number, setNumber] = useState(0);
  const [allInformation, setAllInformation] = useState({
    column: '',
    comparison: '',
    value: '',
  });

  const handleColumn = (value) => {
    setColumn(value);
  };

  const handleComparison = (value) => {
    setFilterComparison(value);
  };

  const handleChange = (value) => {
    setNumber(value);
  };

  const getStatesByClick = () => {
    setAllInformation({
      column: columnFilter,
      comparison: comparisonFilter,
      value: number,
    });
    setComparison({
      column: columnFilter,
      comparison: comparisonFilter,
      value: number,
    });
    setFilterItem({
      filters: {
        ...filterItem.filters,
        filterByNumericValues: [...NumericValues, {
          column: columnFilter,
          comparison: comparisonFilter,
          value: number,
        }],
      },
    });
  };

  return (
    <form>
      <select
        name={ columnFilter }
        data-testid="column-filter"
        onChange={ ({ target: { value } }) => handleColumn(value) }
      >
        <option selected value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        name={ comparisonFilter }
        data-testid="comparison-filter"
        onChange={ ({ target: { value } }) => handleComparison(value) }
      >
        <option selected value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        value={ number }
        onChange={ ({ target: { value } }) => handleChange(value) }
        name="number"
      />
      <button
        type="button"
        name={ allInformation }
        data-testid="button-filter"
        onClick={ getStatesByClick }
      >
        Filtrar
      </button>
    </form>
  );
}

export default FilterNumbers;
