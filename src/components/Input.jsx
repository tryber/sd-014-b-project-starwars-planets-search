import React, { useState, useContext } from 'react';
import planetContext from '../context/planetContext';

function Input() {
  const {
    nameFilter, setPlanets, planets,
  } = useContext(planetContext);
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (value) => {
    setSearchValue(value);
    nameFilter(value);
    const filterDataByName = planets.filter(({ name: nameData }) => (
      nameData.toLowerCase().includes(value.toLowerCase())
    ));
    setPlanets(filterDataByName);
  };

  return (
    <input
      data-testid="name-filter"
      type="text"
      value={ searchValue }
      onChange={ ({ target: { value } }) => handleSearch(value) }
      placeholder="Procurar por nome"
    />
  );
}

export default Input;
