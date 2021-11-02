import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function ColumnFilter() {
  const { handleSelect, filterSearch:
    { filters: { filterByNumericValues: { column } } } } = useContext(PlanetContext);

  return (
    <select
      data-testid="column-filter"
      id="column"
      value={ column }
      onChange={ handleSelect }
    >
      <option value="population">population</option>
      <option value="orbital_period">orbital_period</option>
      <option value="diameter">diameter</option>
      <option value="rotation_period">rotation_period</option>
      <option value="surface_water">surface_water</option>
    </select>
  );
}

export default ColumnFilter;
