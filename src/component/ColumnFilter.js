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
      <option value="population" id="population">population</option>
      <option value="orbital_period" id="orbital_period">orbital_period</option>
      <option value="diameter" id="diameter">diameter</option>
      <option value="rotation_period" id="rotation_period">rotation_period</option>
      <option value="surface_water" id="surface_water">surface_water</option>
    </select>
  );
}

export default ColumnFilter;
