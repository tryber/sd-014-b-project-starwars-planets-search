import React from 'react';
import PlanetFinderProvider from './context/PlanetFinderContext';
import PlanetFinder from './features/PlanetFinder';
import './App.css';

function App() {
  return (
    <div className="App">
      <PlanetFinderProvider>
        <PlanetFinder />
      </PlanetFinderProvider>
    </div>
  );
}

export default App;
