import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Filters() {
  const { setFilters } = useContext(PlanetContext);

  const nameFilter = ({ target: { value } }) => {
    setFilters(
      (prevState) => ({
        ...prevState,
        filterByName: { name: value },
      }),
    );
  };

  return (
    <label htmlFor="name-filter">
      <input
        data-testid="name-filter"
        placeholder="Enter a planet name"
        onChange={ nameFilter }
      />
    </label>
  );
}

export default Filters;
