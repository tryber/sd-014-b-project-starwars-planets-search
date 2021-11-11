import React from 'react';
import './App.css';
import TablePlanets from './components/TablePlanets';
import Provider from './context/Provider';
import PlanetsSearch from './components/PlanetsSearch';

function App() {
  return (
    <Provider>
      <PlanetsSearch />
      <TablePlanets />
    </Provider>
  );
}

export default App;
