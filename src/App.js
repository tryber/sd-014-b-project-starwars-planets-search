import React from 'react';
import TablePlanets from './components/TablePlanets';
import PlanetsProvider from './context/PlanetsProvider';
import './App.css';

function App() {
  return (
    // Provider dentro do App, pois dentro do index.js não passava no teste, então o Iago sugeriu deixar no App, agora funciona
    <PlanetsProvider>
      <main>
        <TablePlanets />
      </main>
    </PlanetsProvider>
  );
}

export default App;
