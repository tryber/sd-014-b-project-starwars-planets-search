import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Select() {
  const { inputSearch, setInputSearch } = useContext(StarWarsContext);

  function handleChange({ target }) {
    if (target.id === 'column') {
      setInputSearch({
        filters: {
          filterByName: { ...inputSearch.filters.filterByName },
          filterByNumericValues: [
            {
              column: target.value,
              comparison: inputSearch.filters.filterByNumericValues[0].comparison,
              value: inputSearch.filters.filterByNumericValues[0].value,
            },
          ],
        },
      });
    }
    if (target.id === 'comparison') {
      setInputSearch({
        filters: {
          filterByName: { ...inputSearch.filters.filterByName },
          filterByNumericValues: [
            {
              column: inputSearch.filters.filterByNumericValues[0].column,
              comparison: target.value,
              value: inputSearch.filters.filterByNumericValues[0].value,
            },
          ],
        },
      });
    }
    if (target.id === 'value') {
      setInputSearch({
        filters: {
          filterByName: { ...inputSearch.filters.filterByName },
          filterByNumericValues: [
            {
              column: inputSearch.filters.filterByNumericValues[0].column,
              comparison: inputSearch.filters.filterByNumericValues[0].comparison,
              value: target.value,
            },
          ],
        },
      });
    }
  }

  return (
    <span>
      <select
        id="column"
        data-testid="column-filter"
        onChange={ (event) => handleChange(event) }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        id="comparison"
        data-testid="comparison-filter"
        onChange={ (event) => handleChange(event) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        id="value"
        type="number"
        data-testid="value-filter"
        placeholder="number"
        onChange={ (event) => handleChange(event) }
      />
    </span>
  );
}

export default Select;
