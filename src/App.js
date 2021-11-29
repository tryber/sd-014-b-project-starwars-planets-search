import React from 'react';
import Header from './components/Header';
import Table from './components/table';
import { PlanetsData } from './Context/StarWarsContext';

function App() {
  return (
    <PlanetsData>
      <Header />
      <Table />
    </PlanetsData>
  );
}

export default App;
