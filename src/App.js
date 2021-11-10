import React from 'react';
import TablePlanets from './components/TablePlanets';
import PlanetsProvider from './context/PlanetsProvider';
import FormsPlanets from './components/FormsPlanets';
import './App.css';
import NumericFilters from './components/NumericFilters';

function App() {
  return (
    // Provider dentro do App, pois dentro do index.js não passava no teste, então o Iago sugeriu deixar no App, agora funciona
    <PlanetsProvider>
      <main>
        <FormsPlanets />
        <NumericFilters />
        <TablePlanets />
      </main>
    </PlanetsProvider>
  );
}

export default App;
