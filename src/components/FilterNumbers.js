import React, { useState } from 'react';
// import NewContext from '../context/NewContext';

function FilterNumbers() {
  // const {  } = useContext(NewContext);
  const [number, setNumber] = useState(0);
  const handleChange = (value) => {
    setNumber(value);
    // setFilter(value);
  };
  return (
    <form>
      <select name="column-filter" data-testid="column-filter">
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select name="comparison-filter" data-testid="comparison-filter">
        <option value="maior que">maior que</option>
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
        data-testid="button-filter"
      >
        Filtrar
      </button>
    </form>
  );
}

export default FilterNumbers;
