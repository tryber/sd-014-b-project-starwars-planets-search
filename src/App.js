import React from 'react';
import Header from './components/Header';
import './App.css';
import Table from './components/Table';
import { PlanetsProvider } from './effects/usePlanets';

function App() {
  return (
    <PlanetsProvider>
      <Header />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
