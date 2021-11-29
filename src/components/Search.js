import React, { useContext, useState, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Search() {
  const { setPlanets, fetch } = useContext(PlanetsContext);
  const [filters, setFilters] = useState({ filterByName: { name: '' } });
  const [planets, setPlanetFilter] = useState([]);

  async function fetchPlanets() {
    const dataPlanets = await fetch();
    setPlanetFilter(dataPlanets);
  }

  useEffect(() => {
    fetchPlanets();
    const dataFilter = planets.filter(
      (value) => value.name.toLowerCase().includes(filters.filterByName.name),
    );
    setPlanets(dataFilter);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.filterByName.name]);

  return (
    <input
      type="text"
      value={ filters.filterByName.name }
      data-testid="name-filter"
      onChange={ ({ target }) => setFilters({ filterByName: { name: target.value } }) }
    />
  );
}

export default Search;
