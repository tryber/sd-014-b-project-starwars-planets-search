import React from 'react';
import './App.css';
import Table from './component/Table';
import PlanetApiProvider from './context/PlanetProvider';
import Filter from './component/Filter';

function App() {
  return (
    <PlanetApiProvider>
      <Filter />
      <Table />
    </PlanetApiProvider>
  );
}

export default App;
