import React, { useEffect, useContext } from 'react';
import { Context } from '../context/Provider';
import fetchPlanets from '../api/StarWars';

function Header() {
  const { setData, setIsLoading } = useContext(Context);

  useEffect(() => {
    const getPlanets = async () => {
      setIsLoading(true);
      const planets = await fetchPlanets();
      setIsLoading(false);
      setData(planets);
    };
    getPlanets();
  }, []);

  return (
    <div>
      <h1>Star Wars Planet Search</h1>
    </div>
  );
}

export default Header;
