import React, { useEffect, useState } from 'react';
import { usePlanets } from '../context/Provider';

function NumericFilter() {
  const {
    filters: { filterByNumericValues },
    setFilterNumeric,
    data,
    setPlanets,
    planets } = usePlanets();

  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('0');
  const [options, setOptions] = useState([]);
  function handleColumn(target) {
    setColumn(target.value);
  }
  function handleComparison(target) {
    setComparison(target.value);
  }
  function handleValue(target) {
    setValue(target.value);
  }

  function handleFilter() {
    setFilterNumeric([...filterByNumericValues, { column, comparison, value }]);

    const filteredPlanets = planets.filter((planet) => {
      if (comparison === 'maior que') {
        return Number(planet[column]) > Number(value);
      } if (comparison === 'menor que') {
        return Number(planet[column]) < Number(value);
      }
      return Number(planet[column]) === Number(value);
    });
    setPlanets(filteredPlanets);
  }

  useEffect(() => {
    const selectOptions = [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];

    const createNewOptions = () => {
      if (filterByNumericValues.length > 0) {
        const filteredOptions = selectOptions
          .filter((option) => !filterByNumericValues.find((filter) => (
            filter.column === option
          )));
        setOptions(filteredOptions);
      } else {
        setOptions(selectOptions);
      }
    };
    createNewOptions();
  }, [filterByNumericValues, filterByNumericValues.length, data]);

  function handleOnClick(filter) {
    const removeFilter = filterByNumericValues.filter((NumericValue) => (
      NumericValue.column !== filter
    ));
    if (removeFilter.length > 0) {
      setFilterNumeric([removeFilter]);
    } else {
      setFilterNumeric([]);
      setPlanets(data);
    }
  }

  return (
    <div>
      <label htmlFor="column_filter">
        <select
          name="column_filter"
          id="column_filter"
          onChange={ ({ target }) => handleColumn(target) }
          data-testid="column-filter"
        >
          {options.map((option) => (
            <option key={ option }>{option}</option>
          ))}
        </select>
      </label>
      <label htmlFor="comparison-filter">
        <select
          name="comparison-filter"
          id="comparison-filter"
          onChange={ ({ target }) => handleComparison(target) }
          data-testid="comparison-filter"
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <label htmlFor="value-filter">
        <input
          name="value-filter"
          id="value-filter"
          onChange={ ({ target }) => handleValue(target) }
          data-testid="value-filter"
          type="number"
          min="0"
        />
      </label>
      <button
        onClick={ handleFilter }
        data-testid="button-filter"
        type="button"
      >
        Filtrar
      </button>
      <div>
        {filterByNumericValues.length > 0 ? (
          filterByNumericValues.map((filter, index) => (
            <div data-testid="filter" key={ index }>
              <p>{ filter.column }</p>
              <button
                onClick={ () => handleOnClick(filter.column) }
                type="button"
              >
                X
              </button>
            </div>
          ))
        ) : null}
      </div>
    </div>
  );
}

export default NumericFilter;
