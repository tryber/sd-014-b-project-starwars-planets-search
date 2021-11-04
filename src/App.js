import React from 'react';
import Table from './components/Table';
import Filters from './components/Filters';
import PlanetsProvider from './context/PlanetsProvider';
import './App.css';

function App() {
  return (
    <PlanetsProvider>
      <Filters />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
