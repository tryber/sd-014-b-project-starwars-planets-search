import React from 'react';
import { usePlanets } from '../context/usePlanets';

function FilterPlanets() {
  const { filters: { name }, setFilterName } = usePlanets();

  return (
    <section>
      <input
        type="text"
        data-testid="name-filter"
        value={ name }
        onChange={ (e) => setFilterName(e.target.value) }
      />
    </section>
  );
}

export default FilterPlanets;
