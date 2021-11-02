import React from 'react';
import './App.css';
import TablePlanets from './components/TablePlanets';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <TablePlanets />
    </PlanetsProvider>
  );
}

export default App;
