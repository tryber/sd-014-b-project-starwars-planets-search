import React, { useContext } from 'react';
import StarwarsContext from '../../context/Context';

export default function InputFindPlanets() {
  const { filters, setFilters } = useContext(StarwarsContext);
  const { filterByName } = filters.filters;
  const { name } = filterByName;

  const handleChange = ({ target }) => {
    setFilters({
      filters: {
        ...filters.filters,
        filterByName: {
          name: target.value,
        },
      },
    });
  };

  return (
    <input
      type="text"
      name="name"
      data-testid="name-filter"
      value={ name }
      onChange={ (event) => handleChange(event) }
    />
  );
}
