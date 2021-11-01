import React, { useContext, useEffect } from 'react';
import { PlanetsContext } from '../contexts/PlanetsContext';
import fetchAPI from '../services/fetchAPI';

function Header() {
  const { setData, setIsLoading } = useContext(PlanetsContext);

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
    </header>
  );
}

export default Header;
