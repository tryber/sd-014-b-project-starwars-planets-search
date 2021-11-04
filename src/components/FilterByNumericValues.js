import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function FilterByNumericValues() {
  const {
    filters: { filterByNumericValues: [{ column, comparison, value: { inputValue } }] },
    filterOn,
    setFilters,
    setFilterOn,
    columns } = useContext(MyContext);

  function handleChange({ target }) {
    const { name, value } = target;
    setFilters((prevState) => ({
      ...prevState,
      filterByNumericValues: [{
        ...prevState.filterByNumericValues[0],
        [name]: value,
      }],
    }));
    setFilterOn(false);
  }

  function handleClick() {
    setFilterOn(!filterOn);
  }

  return (
    <fieldset>
      <select
        data-testid="column-filter"
        name="column"
        value={ column }
        onChange={ handleChange }
      >
        {columns.map((option) => (
          <option key={ option } value={ option }>
            {option}
          </option>
        ))}
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        value={ comparison }
        onChange={ handleChange }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        name="value"
        value={ inputValue }
        onChange={ handleChange }
      />
      <button data-testid="button-filter" type="button" onClick={ handleClick }>
        Filtrar
      </button>
    </fieldset>
  );
}

export default FilterByNumericValues;
