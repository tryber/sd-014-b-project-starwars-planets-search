import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function FilterNumber() {
  const { data, setPlanets } = useContext(PlanetsContext);
  const [inputs, setInputs] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });
  const [filters, setFilters] = useState({
    filterByNumericValues: [],
  });
  const optionsColumns = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  function handleChange({ target }) {
    const input = inputs;
    input[target.name] = target.value;
    setInputs(input);
  }

  function filterSubmit() {
    const { column, comparison, value } = inputs;
    const filterArray = filters.filterByNumericValues;
    filterArray.push(inputs);
    const newFilter = filters;
    newFilter.filterByNumericValues = filterArray;
    setFilters(newFilter);
    if (comparison === 'menor que') {
      const dataReturn = data.filter((
        planet,
      ) => Number(planet[column]) < Number(value));
      setPlanets(dataReturn);
    } else if (comparison === 'maior que') {
      const dataReturn = data.filter((
        planet,
      ) => Number(planet[column]) > Number(value));
      setPlanets(dataReturn);
    } else {
      const dataReturn = data.filter((
        planet,
      ) => Number(planet[column]) === Number(value));
      setPlanets(dataReturn);
    }
  }

  return (
    <div>
      <label htmlFor="filterNumber">
        <select
          name="column"
          data-testid="column-filter"
          id="filterNumber"
          onChange={ handleChange }
        >
          {
            (filters.filterByNumericValues.length >= 1) ? (
              optionsColumns.filter((
                option,
              ) => filters.filterByNumericValues.some((
                optionFilter,
              ) => optionFilter.column !== option)).map((
                optionReturn,
              ) => <option key={ optionReturn }>{ optionReturn }</option>)
            ) : (
              optionsColumns.map((option) => <option key={ option }>{ option }</option>)
            )
          }
        </select>
      </label>
      <select
        name="comparison"
        data-testid="comparison-filter"
        onChange={ handleChange }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        name="value"
        type="number"
        data-testid="value-filter"
        onChange={ handleChange }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ filterSubmit }
      >
        Filtrar
      </button>
    </div>
  );
}

export default FilterNumber;
