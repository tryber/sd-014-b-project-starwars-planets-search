import React, { useContext } from 'react';
import Context from '../context/Context';

function FilterByName() {
  const { filterByName } = useContext(Context);
  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        placeholder="Filtrar por nome"
        onChange={ filterByName }
      />
    </div>
  );
}

export default FilterByName;
