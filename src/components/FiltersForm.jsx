import React, { useContext } from 'react';
import { PlanetsContext } from '../context/PlanetsProvider';
import DefaultInput from './DefaultInput';

export default function FiltersForm() {
  const { filters, setFilters } = useContext(PlanetsContext);

  function handleChange({ target: { value } }) {
    setFilters({
      filters: {
        ...filters,
        filterByName: { name: value.toLowerCase() },
      },
    });
  }
  return (
    <form>
      <DefaultInput
        type="text"
        id="name-filter"
        text="Filter by name: "
        onChange={ handleChange }
      />
    </form>
  );
}
