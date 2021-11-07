import React, { useState, useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const COMPARISON_OPTIONS = ['igual a', 'maior que', 'menor que'];

const COLUMN_OPTIONS = ['population', 'orbital_period', 'diameter',
  'rotation_period', 'surface_water'];

export default function Filters() {
  const {
    data,
    filters: { filterByNumericValues },
    setFilterNumericValues,
    filteredStarWars,
    setFilteredStarWars } = useContext(StarWarsContext);
  // console.log(filteredStarWars);

  const [column, setFilterColumn] = useState('population');
  const [comparison, setFilterComparison] = useState('igual a');
  const [value, setFilterValue] = useState('0');
  const [columnOptions, setColumnOptions] = useState([]);

  useEffect(() => {
    function createNewOptions() {
      if (filterByNumericValues.length > 0) {
        const filteredOptions = COLUMN_OPTIONS
          .filter((option) => !filterByNumericValues.find((filter) => (
            option === filter.column
          )));
        setColumnOptions(filteredOptions);
        console.log(filteredOptions);
      } else {
        setColumnOptions(COLUMN_OPTIONS);
      }
    }
    createNewOptions();
  }, [filterByNumericValues]);

  function handleFilterColumn({ target }) {
    setFilterColumn(target.value);
  }

  function handleFilterComparison({ target }) {
    setFilterComparison(target.value);
  }

  function handleFilterValue({ target }) {
    setFilterValue(target.value);
  }

  // Resolução das funções dos botões com auxílio do colega Vitor Silva
  function buttonFilter() {
    setFilterNumericValues([...filterByNumericValues,
      { column, comparison, value }]);

    const planetFiltered = filteredStarWars.filter((planet) => {
      if (comparison === 'maior que') {
        return Number(planet[column]) > Number(value);
      } if (comparison === 'menor que') {
        return Number(planet[column]) < Number(value);
      }
      return Number(planet[column]) === Number(value);
    });
    setFilteredStarWars(planetFiltered);
  }

  function buttonDeleteX(filter) {
    const removeItemFiltered = filterByNumericValues.filter((item) => (
      // console.log(item.column)
      item.column !== filter

    ));
    if (removeItemFiltered.length > 0) {
      setFilterNumericValues([removeItemFiltered]);
    } else {
      setFilterNumericValues([]);
      setFilteredStarWars(data);
    }
  }

  return (
    <div>
      <label htmlFor="column-filter">
        <select
          name="column-filter"
          data-testid="column-filter"
          onChange={ handleFilterColumn }
        >
          {columnOptions.map((columnOption) => (
            <option key={ columnOption }>{columnOption}</option>
          ))}
        </select>
      </label>

      <label htmlFor="comparison-filter">
        <select
          name="comparison-filter"
          data-testid="comparison-filter"
          onChange={ handleFilterComparison }
        >
          {COMPARISON_OPTIONS.map((comparisonOption) => (
            <option key={ comparisonOption }>{comparisonOption}</option>
          ))}
        </select>
      </label>

      <label htmlFor="value-filter">
        <input
          type="number"
          min="0"
          name="value-filter"
          data-testid="value-filter"
          onChange={ handleFilterValue }
        />
      </label>

      <button
        type="button"
        data-testid="button-filter"
        onClick={ buttonFilter }
      >
        Filter
      </button>
      {filterByNumericValues.length > 0 ? (
        filterByNumericValues.map((filter) => (
          <div key={ filter } data-testid="filter">
            <h2>{`${filter.column} ${filter.comparison} ${filter.value}`}</h2>
            <button
              type="button"
              onClick={ buttonDeleteX }
            >
              X
            </button>
          </div>
        ))) : null }

    </div>
  );
}
