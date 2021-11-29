import React from 'react';
import './App.css';
import Table from './components/Table';
import { PlanetsProvider } from './context/Planets';
import FilterByName from './components/FilterByName';
import FilterByNumber from './components/FilterByNumber';
import OrderColumns from './components/OrderColumns';

function App() {
  return (
    <PlanetsProvider>
      <FilterByName />
      <FilterByNumber />
      <OrderColumns />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
