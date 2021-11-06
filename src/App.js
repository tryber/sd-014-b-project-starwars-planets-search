import React from 'react';
import './App.css';
import Header from './components/Header';
import Table from './components/Table';
import { FiltersProvider } from './context/Filters';
import { PlanetsProvider } from './context/Planets';

function App() {
  return (
    <PlanetsProvider>
      <FiltersProvider>
        <Header />
        <Table />
      </FiltersProvider>
    </PlanetsProvider>
  );
}

export default App;
