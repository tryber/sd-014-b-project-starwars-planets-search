import React, { useState } from 'react';
import './App.css';
import PlanetFinder from './components/PlanetFinder';
import PlanetFinderProvider from './context/PlanetFinderContext';

function App() {
  const [loadingData, setLoadingData] = useState(true);
  return (
    <div>
      <PlanetFinderProvider>
        <PlanetFinder />
      </PlanetFinderProvider>
    </div>

  );
}

export default App;
