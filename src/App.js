import React from 'react';
import './App.css';
import PlanetFinder from './components/PlanetFinder';
import PlanetFinderProvider from './context/PlanetFinderContext';

function App() {
  return (
    <div>
      <PlanetFinderProvider>
        <PlanetFinder />
      </PlanetFinderProvider>
    </div>

  );
}

export default App;
