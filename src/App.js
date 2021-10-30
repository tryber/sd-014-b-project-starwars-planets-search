import React from 'react';
import PlanetProvider from './context/PlanetProvider';
import PlanetFinder from './features/planetFinder/PlanetFinder';
import './App.css';

function App() {
  return (
    <PlanetProvider>
      <PlanetFinder />
    </PlanetProvider>
  );
}

export default App;
