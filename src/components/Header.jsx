import React, { useContext, useEffect } from 'react';
import PlanetContext from '../context/PlanetContext';

function Header() {
  const { setData, setLoading, setName, filters } = useContext(PlanetContext);
  useEffect(() => {
    const fetchPlanets = async () => {
      const result = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const data = await result.json();
      const planets = await data.results;
      const filtered = planets.filter(({ name }) => (
        name.toLowerCase().includes(filters.filterByName.name.toLowerCase())));
      setData(filtered);
      setLoading(false);
    };
    fetchPlanets();
  }, [setLoading, setData, filters]);
  return (
    <header>
      <h1>Projeto Star Wars - Trybe</h1>
      <input
        data-testid="name-filter"
        onChange={ ({ target }) => setName(target.value) }
        type="text"
        placeholder="Filtrar por nome"
      />
    </header>
  );
}

export default Header;
