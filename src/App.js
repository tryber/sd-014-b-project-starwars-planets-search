import React from 'react';
import './App.css';
import PlanetsTable from './components/PlanetsTable';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <main>
        <h1>Starwars Planets Search</h1>
        <PlanetsTable />
      </main>
    </Provider>
  );
}

export default App;
