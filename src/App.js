import React from 'react';
import './App.css';
import FilterNumbers from './Components/NumberFilter';
import FilterPlanets from './Components/PlanetFilter';
import SortFilter from './Components/SortFilter';
import Table from './Components/Table';
import { PlanetsProvider } from './context/usePlanets';

function App() {
  return (
    <PlanetsProvider>
      <h1>Star Wars Planets Search</h1>
      <FilterPlanets />
      <FilterNumbers />
      <SortFilter />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
