import React from 'react';
import './App.css';
import Table from './components/table';
import PlanetsProvider from './context/Provider';

function App() {
  return (
    <PlanetsProvider>
      <span>Star Wars</span>
      <Table />
    </PlanetsProvider>
  );
}

export default App;
