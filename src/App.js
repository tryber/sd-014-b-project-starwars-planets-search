import React from 'react';
import PlanetProvider from './context/PlanetProvider';
import Table from './components/table/Table';
import Input from './components/input/Input';
import Filter from './components/filter/Filter';
import SortFilter from './components/filter/SortFilter';
import './App.css';

function App() {
  return (
    <PlanetProvider>
      <Input />
      <Filter />
      <SortFilter />
      <Table />
    </PlanetProvider>
  );
}

export default App;
