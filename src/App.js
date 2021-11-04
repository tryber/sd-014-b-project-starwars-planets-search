import React from 'react';
import Main from './components/Main';
import PlanetsTableProvider from './contexts/PlanetsTableProvider';
import './App.css';

function App() {
  return (
    <PlanetsTableProvider>
      <h1>Star Wars Planets Search</h1>
      <Main />
    </PlanetsTableProvider>
  );
}

export default App;
