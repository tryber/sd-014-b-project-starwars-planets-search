import React from 'react';
import './App.css';
import Table from './components/Table';
import { PlanetsProvider } from './context/Planets';
import FilterByName from './components/FilterByName';

function App() {
  return (
    <PlanetsProvider>
      <FilterByName />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
