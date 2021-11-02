import React from 'react';
import './App.css';
import FilterPlanet from './components/Form';
import Table from './components/table';
import PlanetsProvider from './context/Provider';

function App() {
  return (
    <PlanetsProvider>
      <span>Star Wars</span>
      <FilterPlanet />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
