import React from 'react';
import Table from './components/Table';
import Filters from './components/Filters';
import PlanetProvider from './context/PlanetProvider';
import './App.css';

function App() {
  return (
    <PlanetProvider>
      <Filters />
      <Table />
    </PlanetProvider>
  );
}

export default App;
