import React, { useContext, useState } from 'react';
import Table from '../components/Table';
import PlanetsContext from '../context/PlanetsContext';

function Starwars() {
  const [inputText, setInputText] = useState('');
  const { setFilters, setData, backup } = useContext(PlanetsContext);

  function filterByName(value) {
    const filteredPlanets = backup.filter(
      (planet) => (
        planet.name.toLowerCase().includes(value.toLowerCase())
      ),
    );
    return filteredPlanets;
  }

  function handleChange(event) {
    const { value } = event.target;
    setInputText(value);
    setFilters({
      filterByName: {
        name: value,
      },
    });
    const filteredPlanets = filterByName(value);
    if (value === '') {
      setData(backup);
    } else {
      setData(filteredPlanets);
    }
  }

  return (
    <main>
      <h1>Projeto Star Wars - Trybe</h1>
      <input
        data-testid="name-filter"
        onChange={ handleChange }
        value={ inputText }
      />
      <Table />
    </main>
  );
}

export default Starwars;
