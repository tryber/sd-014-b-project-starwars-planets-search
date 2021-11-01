import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function FilterPlanets() {
  const { filters: { name }, handleFilterName } = useContext(PlanetsContext);

  return (
    <section>
      <input
        type="text"
        data-testid="name-filter"
        value={ name }
        onChange={ handleFilterName }
      />
    </section>
  );
}

export default FilterPlanets;
