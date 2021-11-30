import React, { useContext } from 'react';
import appContext from '../context/Context';

export default function SearchBar() {
  const { setFilter } = useContext(appContext);

  const handleChange = (name) => {
    setFilter({
      filters: {
        filterByName: {
          name,
        },
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
