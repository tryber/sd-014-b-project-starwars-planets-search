import React, { useState, useContext } from 'react';
import planetContext from '../context/planetContext';

function Input() {
  const [search, setSearch] = useState('');
  const { nameFilter, setPlanets, planets } = useContext(planetContext);

  function handleFilter(value) {
    setSearch(value);
    nameFilter(value);
    const filteredPlanets = planets
      .filter(({ name: planetName }) => planetName.toLowerCase()
        .includes(value.toLowerCase()));
    setPlanets(filteredPlanets);
  }

  return (
    <input
      type="text"
      data-testid="name-filter"
      value={ search }
      onChange={ ({ target: { value } }) => handleFilter(value) }
    />
  );
}

export default Input;
