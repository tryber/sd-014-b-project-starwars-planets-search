import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function NumericFilter() {
  const {
    filtersList, setFiltersList, setToShowPlanetsList, allPlanetsList,
    columnsList,
  } = useContext(PlanetsContext);

  const [columnOptions, setColumnsOptions] = useState(columnsList);
  const [columnFilterValue, setColumnFilterValue] = useState(columnOptions[0]);
  const [comparisonFilterValue, setComparisonFilterValue] = useState('maior que');
  const [valueFilterValue, setValueFilterValue] = useState('');

  function addFilter() {
    setFiltersList({
      filters: {
        ...filtersList.filters,
        filterByNumericValues: [
          ...filtersList.filters.filterByNumericValues,
          {
            column: columnFilterValue,
            comparison: comparisonFilterValue,
            value: valueFilterValue,
          },
        ],
      },
    });

    const filteredPlanets = allPlanetsList.filter((planet) => {
      if (comparisonFilterValue === 'maior que') {
        return Number(planet[columnFilterValue]) > Number(valueFilterValue);
      }
      if (comparisonFilterValue === 'menor que') {
        return Number(planet[columnFilterValue]) < Number(valueFilterValue);
      }
      if (comparisonFilterValue === 'igual a') {
        return Number(planet[columnFilterValue]) === Number(valueFilterValue);
      }
      return null;
    });
    setColumnsOptions(columnsList.filter((column) => column !== columnFilterValue));
    setToShowPlanetsList(filteredPlanets);
  }

  return (
    <>
      <label htmlFor="column-filter">
        <select
          id="column-filter"
          data-testid="column-filter"
          value={ columnFilterValue }
          onChange={ ({ target: { value } }) => {
            setColumnFilterValue(value);
          } }
        >
          { columnOptions.map((column, key) => (
            <option key={ key } value={ column }>{ column }</option>
          )) }
        </select>
      </label>
      <label htmlFor="comparison-filter">
        <select
          id="comparison-filter"
          data-testid="comparison-filter"
          value={ comparisonFilterValue }
          onChange={ ({ target: { value } }) => {
            setComparisonFilterValue(value);
          } }
        >
          <option value="maior que">maior que</option>
          <option value="igual a">igual a</option>
          <option value="menor que">menor que</option>
        </select>
      </label>
      <label htmlFor="value-filter">
        <input
          id="value-filter"
          data-testid="value-filter"
          value={ valueFilterValue }
          onChange={ ({ target: { value } }) => {
            setValueFilterValue(value);
          } }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ addFilter }
      >
        Add filter
      </button>
      <div>
        { filtersList.filters.filterByNumericValues
          .map(({ column, comparison, value }, key) => (
            <div key={ key } data-testid="filter">
              { `${column} ${comparison} ${value}` }
              <button type="button">
                X
              </button>
            </div>
          )) }
      </div>
    </>
  );
}

export default NumericFilter;
