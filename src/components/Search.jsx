import React, { useState, useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function Search() {
  const {
    addNameFilter, setPlanetsFilter, allPlanets,
  } = useContext(PlanetsContext);
  const [searchValue, setSearchValue] = useState('');

  const handleFilter = (value) => {
    setSearchValue(value);
    addNameFilter(value);
    const filterDataByName = allPlanets.filter(({ name: nameData }) => (
      nameData.toLowerCase().includes(value.toLowerCase())
    ));
    setPlanetsFilter(filterDataByName);
  };

  return (
    <input
      className="form-control"
      data-testid="name-filter"
      type="text"
      value={ searchValue }
      onChange={ ({ target: { value } }) => handleFilter(value) }
      placeholder="Procurar por nome"
    />
  );
}
