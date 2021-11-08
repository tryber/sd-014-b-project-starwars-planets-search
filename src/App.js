import React from 'react';
import './App.css';
import FilterNumbers from './Components/FilterNumbers';
import FilterPlanets from './Components/FilterPlanets';
import Table from './Components/Table';
import { PlanetsProvider } from './context/usePlanets';

function App() {
  return (
    <PlanetsProvider>
      <h1>Star Wars Planets Search</h1>
      <FilterPlanets />
      <FilterNumbers />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
