import React from 'react';
import PlanetProvider from './context/PlanetProvider';
import Table from './components/Table';

function App() {
  return (
    <PlanetProvider>
      <Table />
    </PlanetProvider>
  );
}

export default App;
