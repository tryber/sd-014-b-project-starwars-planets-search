import React from 'react';
import './App.css';
import NumericFilter from './components/NumericFilter';
import SearchBar from './components/SearchBar';
import Table from './components/Table';
import PlanetProvider from './context/PlanetProvider';

function App() {
  return (
    <PlanetProvider>
      <main>
        <h1>StarWars Planets Search</h1>
        <SearchBar />
        <NumericFilter />
        <Table />
      </main>
    </PlanetProvider>
  );
}

export default App;
