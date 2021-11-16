import React, { useContext } from 'react';
import PlanetsContext from '../context/Planets';

function FilterByName() {
  const { handleFilterByName } = useContext(PlanetsContext);

  return (
    <input
      type="text"
      data-testid="name-filter"
      placeholder="Filtrar por Nome"
      onChange={ handleFilterByName }
    />
  );
}

export default FilterByName;
