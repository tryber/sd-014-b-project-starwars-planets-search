import React, { useContext, useEffect } from 'react';
import PlanetContext from '../context/PlanetContext';

function Header() {
  const { setData, setLoading } = useContext(PlanetContext);
  useEffect(() => {
    const fetchPlanets = async () => {
      const result = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const data = await result.json();
      setData(data.results);
      setLoading(false);
    };
    fetchPlanets();
  }, [setLoading, setData]);
  return (
    <header>
      <h1>Projeto Star Wars - Trybe</h1>
      <input type="text" placeholder="Filtrar por nome" />
    </header>
  );
}

export default Header;
