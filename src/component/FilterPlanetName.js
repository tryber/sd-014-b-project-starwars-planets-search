import React, { useContext } from 'react';
import Context from '../context/AppContext';

function FilterName() {
  const { handleFilterName } = useContext(Context);

  return (
    <input
      type="text"
      data-testid="name-filter"
      placeholder="Filtrar por Nome"
      onChange={ handleFilterName }
    />
  );
}

export default FilterName;
