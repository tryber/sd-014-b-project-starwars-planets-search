import React from 'react';
import './App.css';
import Filters from './components/Filters';
import Header from './components/Header';
import TableOfPlanets from './components/TableOfPlanets';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <main>
      <PlanetsProvider>
        <Header />
        <Filters />
        <TableOfPlanets />
      </PlanetsProvider>
    </main>
  );
}

export default App;
