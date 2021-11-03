import React, { useContext, useEffect } from 'react';
import PlanetContext from '../context/PlanetContext';

function Header() {
  const { setData, data, setLoading, filters: { filterByName },
    setName, setFiltered } = useContext(PlanetContext);
  useEffect(() => {
    const fetchPlanets = async () => {
      const result = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const planets = await result.json();
      setData(planets.results);
      setFiltered(planets.results);
      setLoading(false);
    };
    fetchPlanets();
  }, [setLoading, setData, setFiltered]);
  useEffect(() => {
    const filtered = data.filter(({ name }) => (
      name.toLowerCase().includes(filterByName.name.toLowerCase())
    ));
    setFiltered(filtered);
  }, [filterByName.name, setFiltered, data]);

  return (
    <header>
      <h1>Projeto Star Wars - Trybe</h1>
      <input
        type="text"
        placeholder="Filtrar por nome"
        onChange={ ({ target }) => setName(target.value) }
        data-testid="name-filter"
      />
    </header>
  );
}

export default Header;
