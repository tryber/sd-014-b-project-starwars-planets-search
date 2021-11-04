import React from 'react';
import HomePage from './components/HomePage';
import PlanetsProvieder from './context/PlanetsProvieder';
import './App.css';

function App() {
  return (
    <PlanetsProvieder>
      <HomePage />
    </PlanetsProvieder>
  );
}

export default App;
