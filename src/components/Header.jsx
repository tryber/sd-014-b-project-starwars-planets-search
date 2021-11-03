import React, { useEffect, useContext } from 'react';
import { Context } from '../context/Provider';
import fetchPlanets from '../api/StarWars';

function Header() {
  const { setData, setIsLoading, data, setFilters } = useContext(Context);

  useEffect(() => {
    const getPlanets = async () => {
      setIsLoading(true);
      const planets = await fetchPlanets();
      setIsLoading(false);
      setData(planets);
    };
    getPlanets();
  }, []);

  const handleInput = async ({ target }) => {
    const searchedPlanet = target.value.toLowerCase();
    const filteredPlanets = data.filter((planet) => (
      planet.name.toLowerCase().includes(searchedPlanet)
    ));
    setData(filteredPlanets);
    setFilters({ filterByName: { name: searchedPlanet } });
    if (searchedPlanet.length === 0) {
      const planets = await fetchPlanets();
      setData(planets);
    }
  };

  return (
    <div>
      <h1>Star Wars Planet Search</h1>
      <div>
        <input
          data-testid="name-filter"
          onChange={ handleInput }
          type="text"
          placeholder="filtar por nome"
        />
      </div>
    </div>
  );
}

export default Header;
