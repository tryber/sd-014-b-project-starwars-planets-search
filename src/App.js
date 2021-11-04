import React from 'react';
import PaginaInicial from './components/Table';
import PlanetsProvieder from './context/PlanetsProvieder'
import './App.css';

function App() {
  return (
    <PlanetsProvieder>
      <PaginaInicial />
    </PlanetsProvieder>
  );
}

export default App;
