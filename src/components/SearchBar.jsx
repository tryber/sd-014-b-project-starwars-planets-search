import React, { useContext } from 'react';
import appContext from '../context/Context';

export default function SearchBar() {
  const { filter, setFilter } = useContext(appContext);

  const handleChange = (name) => {
    setFilter({
      filters:
      {
        ...filter,
        filterByName: {
          name,
        },
        filterByNumericValues: [
          ...filter.filters.filterByNumericValues,
        ],
      },
    });
  };

  return (
    <div>
      <label id="searchPlanet" htmlFor="inputSearch">
        <input
          data-testid="name-filter"
          type="text"
          placeholder="Filtrar por nome"
          onChange={ (e) => handleChange(e.target.value) }
        />
      </label>
    </div>
  );
}
