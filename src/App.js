import React from 'react';
import Table from './components/Table';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <h1>Star Wars Planet</h1>
      <Table />
    </PlanetsProvider>
  );
}

export default App;
