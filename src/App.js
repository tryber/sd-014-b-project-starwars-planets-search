import React from 'react';
import './App.css';
import TablePlanets from './components/TablePlanets';
import Provider from './context/Provider';
import PlanetsSearch from './components/PlanetsSearch';
import NumericFilter from './components/NumericFilter';

function App() {
  return (
    <Provider>
      <PlanetsSearch />
      <NumericFilter />
      <TablePlanets />
    </Provider>
  );
}

export default App;
