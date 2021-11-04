import React, { useEffect, useContext } from 'react';
import { Context } from '../context/Provider';
import fetchPlanets from '../api/StarWars';

function Header() {
  const {
    filters,
    setFilters,
    data,
    setData,
    setIsLoading } = useContext(Context);

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

  const handleNumericFilters = ({ target }) => {
    const { name, value } = target;
    setFilters({
      ...filters,
      filterByNumericValues: [{
        ...filters.filterByNumericValues[0],
        [name]: value,
      }],
    });
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
        <select
          onChange={ handleNumericFilters }
          data-testid="comparison-filter"
          name="column"
        >
          <option value="population">Population</option>
          <option value="orbital_period">Orbital period</option>
          <option value="diameter">Diameter</option>
          <option value="rotation_period">Rotation period</option>
          <option value="surface_water">Surface water</option>
        </select>
        <select
          data-testid="comparison-filter"
          name="comparison"
          onChange={ handleNumericFilters }
        >
          <option value="maior que">Maior que</option>
          <option value="menor que">Menor que</option>
          <option value="igual a">Igual a</option>
        </select>
        <input
          data-testid="value-filter"
          type="number"
          name="value"
          onChange={ handleNumericFilters }
        />
        <button
          type="button"
          data-testid="button-filter"
        >
          Filtrar

        </button>
      </div>
    </div>
  );
}

export default Header;
