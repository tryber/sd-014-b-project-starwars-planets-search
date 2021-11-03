import React, { useContext, useEffect } from 'react';
import { PlanetsContext } from '../contexts/PlanetsContext';
import fetchAPI from '../services/fetchAPI';

function Header() {
  const { setData, setIsLoading, filters, setFilters } = useContext(PlanetsContext);

  useEffect(() => {
    const fetchPlanets = async () => {
      setIsLoading(true);
      const planets = await fetchAPI();
      setData(planets);
      setIsLoading(false);
    };
    fetchPlanets();
  }, []);

  return (
    <header>
      <h1>Projeto Star Wars - Trybe</h1>
      <input
        type="text"
        value={ filters.filterByName }
        placeholder="Filtrar por nome"
        onChange={ (e) => setFilters({
          ...filters,
          filterByName: e.target.value,
        }) }
        data-testid="name-filter"
      />
    </header>
  );
}

export default Header;
