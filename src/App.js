import React from 'react';
import './App.css';
import Starwars from './pages/Starwars';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <Starwars />
    </PlanetsProvider>
  );
}

export default App;
