import React from 'react';
import './App.css';
import Table from './component/Table';
import PlanetApiProvider from './context/PlanetProvider';
import Filter from './component/Filter';
import FilterValue from './component/FilterValues';

function App() {
  return (
    <PlanetApiProvider>
      <Filter />
      <FilterValue />
      <Table />
    </PlanetApiProvider>
  );
}

export default App;
