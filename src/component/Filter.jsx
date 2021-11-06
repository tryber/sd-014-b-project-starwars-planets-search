import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Filter() {
  const { state, setState } = useContext(PlanetContext);

  function handleChange({ target: { value } }) {
    const { filteredPlanets } = state;

    setState({
      ...state,
      filters: { filterByName: { name: value } },
      planets: filteredPlanets.filter((a) => a.name.toLowerCase()
        .includes(value.toLowerCase())),
    });
  }

  return (
    <input type="text" onChange={ handleChange } data-testid="name-filter" />
  );
}

export default Filter;
