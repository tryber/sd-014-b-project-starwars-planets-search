import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function ComparisonFilter() {
  const { handleSelect, filterSearch:
    { filters: { filterByNumericValues: { comparison } } } } = useContext(PlanetContext);

  return (
    <select
      data-testid="comparison-filter"
      id="comparison"
      value={ comparison }
      onChange={ handleSelect }
    >
      <option value="maior que">maior que</option>
      <option value="menor que">menor que</option>
      <option value="igual a">igual a</option>
    </select>
  );
}

export default ComparisonFilter;
