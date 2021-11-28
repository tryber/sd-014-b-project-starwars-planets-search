import React, { useState, useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

export default function Search() {
  const { listOfPlanets, setPlanetFilter, newTextFilter } = useContext(PlanetContext);
  const [searchInput, setSearchInput] = useState('');

  const handleChange = (value) => {
    setSearchInput(value);
    newTextFilter(value);
    const filterByName = listOfPlanets.filter(({ name: planetName }) => (
      planetName.toLowerCase().includes(value.toLowerCase())
    ));
    setPlanetFilter(filterByName);
  };

  return (
    <input
      data-testid="name-filter"
      type="text"
      value={ searchInput }
      onChange={ ({ target: { value } }) => handleChange(value) }
      placeholder="Find by name"
    />
  );
}
