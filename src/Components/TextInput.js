import React, { useContext } from 'react';
import DataContext from '../context/Context';
import starWarsApi from '../Services/starWarsApi';

const TextInput = () => {
  const { setFilter, setPlanets, planets } = useContext(DataContext);

  // Lógica da linha 16 à 18 retirada do repo do Gustavo Inacio
  // ref:https://github.com/tryber/sd-014-b-project-starwars-planets-search/pull/80/commits/2f9a7ce7d0c2f8900c1464152ec7835389181ac5

  const onChange = async ({ target: { value } }) => {
    const searchedPlanet = value.toLowerCase();
    const filteredPlanets = planets.filter((planet) => (
      planet.name.toLowerCase().includes(searchedPlanet)
    ));
    setPlanets(filteredPlanets);
    setFilter({ filters: { filterByName: { name: value } } });
    if (searchedPlanet.length === 0) {
      const response = await starWarsApi();
      setPlanets(response.results);
    }
  };

  return (
    <input
      type="text"
      placeholder="Filter by name"
      data-testid="name-filter"
      onChange={ onChange }
    />
  );
};

export default TextInput;
