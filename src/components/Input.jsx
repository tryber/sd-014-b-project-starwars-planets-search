import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Input() {
  const { data, setFilters, setPlanetsUpdated } = useContext(PlanetsContext);

  async function filterPlanets({ target: { value } }) {
    // Tanto o input digitado, quando o nome do planeta são jogados para lowercase
    const inputValue = value.toLowerCase();

    const filteredPlanets = data
      .filter((planet) => (planet.name.toLowerCase()).includes(inputValue));

    setFilters({ filterByName: { name: filteredPlanets } });
    setPlanetsUpdated(filteredPlanets);
  }

  return (
    <input
      data-testid="name-filter"
      placeholder="Filtrar por nome"
      onChange={ filterPlanets }
    />
  );
}

export default Input;
