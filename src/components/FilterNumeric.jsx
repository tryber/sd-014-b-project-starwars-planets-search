import React, { useState, useContext } from 'react';
import Context from '../context/Context';

function FilterNumeric() {
  const initialFilter = {
    column: 'population',
    comparison: 'maior que',
    value: '0',
  };

  const { handleFilterValues } = useContext(Context);
  const [filterNumeric, setFilterNumeric] = useState(initialFilter);

  const handleChange = ({ target }) => {
    setFilterNumeric({
      ...filterNumeric,
      [target.name]: target.value,
    });
  };

  return (
    <section>
      <select data-testid="column-filter" name="column" onChange={ handleChange }>
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>

      <select data-testid="comparison-filter" name="comparison" onChange={ handleChange }>
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <input
        type="number"
        data-testid="value-filter"
        name="value"
        onChange={ handleChange }
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => handleFilterValues(filterNumeric) }
      >
        Filtrar
      </button>
    </section>
  );
}

export default FilterNumeric;
