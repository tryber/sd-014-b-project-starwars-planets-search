import React from 'react';
import './App.css';
import FilterPlanets from './Components/FilterPlanets';
import Table from './Components/Table';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <h1>Star Wars Planets Search</h1>
      <FilterPlanets />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
