import React from 'react';
import PlanetProvider from './context/PlanetProvider';
import Table from './components/table/Table';
import './App.css';

function App() {
  return (
    <PlanetProvider>
      <Table />
    </PlanetProvider>
  );
}

export default App;
