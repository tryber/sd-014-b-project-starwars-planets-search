import React from 'react';
import PlanetProvider from './context/PlanetProvider';
import PlanetFinder from './features/planetFinder/PlanetFinder';
import './App.css';

function App() {
  return (
    <div className="App">
      <PlanetProvider>
        <PlanetFinder />
      </PlanetProvider>
    </div>
  );
}

export default App;
