import React from 'react';
import Provider from './context/Provider';
import PlanetsTable from './components/PlanetsTable';
import './App.css';

function App() {
  return (
    <Provider>
      <PlanetsTable />
    </Provider>
  );
}

export default App;
