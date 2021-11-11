import React from 'react';
import './App.css';
import Search from './components/Search';
import Table from './components/Table';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <header>
        <h1>Project Star Wars - Planets Search </h1>
      </header>
      <Search />
      <hr />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
