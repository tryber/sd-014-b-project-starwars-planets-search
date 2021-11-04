import React, { useContext } from 'react';
import Context from '../context/Context';

function Filters() {
  const { handlechange, filter } = useContext(Context);

  return (
    <form>
      <input
        data-testid="name-filter"
        type="text"
        id="name"
        placeholder="Filtrar por nome"
        defaultValue={ filter.filters.filterByName.name }
        onChange={ handlechange }
      />
    </form>
  );
}

export default Filters;
