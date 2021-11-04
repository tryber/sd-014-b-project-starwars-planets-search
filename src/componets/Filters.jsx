import React, { useContext } from 'react';
import Context from '../context/Context';

function Filters() {
  const { handlechange, filter } = useContext(Context);
  return (
    <input
      data-testid="name-filter"
      type="text"
      id="name"
      placeholder="Filtrar por nome"
      value={ filter.filters.filterByName.name }
      onChange={ handlechange }
    />
  );
}

export default Filters;
