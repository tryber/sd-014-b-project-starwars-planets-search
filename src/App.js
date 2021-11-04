import React from 'react';
import Input from './components/Input';
import Table from './components/Table';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <h1>Star Wars Planet</h1>
      <Input />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
