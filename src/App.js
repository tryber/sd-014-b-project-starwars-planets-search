import React from 'react';
import './App.css';
import Search from './components/Search';
import Table from './components/Table';
import PlanetsProvider from './context/PlanetsProvider';
import FilterNumber from './components/FilterNumber';
import Order from './components/Order';

function App() {
  return (
    <PlanetsProvider>
      <header>
        <h1>Project Star Wars - Planets Search </h1>
      </header>
      <Search />
      <FilterNumber />
      <Order />
      <hr />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
