import React, { useContext, useState } from 'react';
import Table from '../components/Table';
import NumericFilter from '../components/NumericFilter';
import PlanetsContext from '../context/PlanetsContext';

function Starwars() {
  const [inputText, setInputText] = useState('');
  const { filters, setFilters, setData, backup } = useContext(PlanetsContext);

  function filterByName(value) {
    const filteredPlanets = backup.filter(
      (planet) => (
        planet.name.toLowerCase().includes(value.toLowerCase())
      ),
    );
    return filteredPlanets;
  }

  function handleTextChange(event) {
    const { value } = event.target;
    setInputText(value);
    setFilters({
      ...filters,
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
      <section>
        <input
          data-testid="name-filter"
          onChange={ handleTextChange }
          value={ inputText }
        />
        <NumericFilter />
      </section>
      <Table />
    </main>
  );
}

export default Starwars;
