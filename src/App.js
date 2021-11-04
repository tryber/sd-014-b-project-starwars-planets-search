import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Table from './components/Table';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <div className="App">
        <h1>Projeto Star Wars - Trybe</h1>
        <SearchBar />
        <Table />
      </div>
    </PlanetsProvider>
  );
}

export default App;
