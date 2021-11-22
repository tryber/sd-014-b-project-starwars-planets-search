import React from 'react';
import Table from './components/table';
import { PlanetsData } from './Context/StarWarsContext';

function App() {
  return (
    <PlanetsData>
      <Table />
    </PlanetsData>
  );
}

export default App;
