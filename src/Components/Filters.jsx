import React from 'react';
import { usePlanets } from '../context/Provider';
import NumericFilter from './NumericFilter';

function Filters() {
  const { filters: { name }, setFilterName } = usePlanets();

  return (
    <section>
      <input
        type="text"
        data-testid="name-filter"
        value={ name }
        onChange={ (e) => setFilterName(e.target.value) }
      />
      <NumericFilter />
    </section>
  );
}

export default Filters;
