import React, { useContext } from 'react';
import PlanetsTableContext from '../contexts';

export default function NameFilterInput() {
  const { filters, setFilters } = useContext(PlanetsTableContext);
  const { filterByName: { name } } = filters;

  function handleChange({ target: { value } }) {
    setFilters({ ...filters, filterByName: { name: value } });
  }

  return (
    <input
      type="text"
      name="planetName"
      placeholder="Filtrar por nome"
      value={ name }
      onChange={ (event) => handleChange(event) }
      data-testid="name-filter"
    />
  );
}
