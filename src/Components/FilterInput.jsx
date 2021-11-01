import React, { useContext } from 'react';
import TableContext from '../context/TableContext';

function FilterInput() {
  const { filters, setFilters } = useContext(TableContext);
  function handleChange({ target }) {
    setFilters({ filterByName: { name: target.value } });
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Filtre po nome"
        data-testid="name-filter"
        name="planetName"
        value={ filters.filterByName.name }
        onChange={ (event) => handleChange(event) }
      />
    </div>
  );
}

export default FilterInput;
