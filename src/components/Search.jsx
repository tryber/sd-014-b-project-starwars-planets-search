import React, { useState, useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function Search() {
  const {
    setFilter, filterObject, setPlanetsFilter, allPlanets,
  } = useContext(PlanetsContext);
  const [searchValue, setSearchValue] = useState('');

  const handleFilter = (value) => {
    setSearchValue(value);
    setFilter({
      filters: {
        ...filterObject.filters,
        filterByName: {
          name: value,
        },
      },
    });
    const filterDataByName = allPlanets.filter(({ name: nameData }) => (
      nameData.toLowerCase().includes(value.toLowerCase())
    ));
    setPlanetsFilter(filterDataByName);
  };

  return (
    <input
      data-testid="name-filter"
      type="text"
      value={ searchValue }
      onChange={ ({ target: { value } }) => handleFilter(value) }
      placeholder="Procurar por nome"
    />
  );
}
