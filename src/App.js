import React from 'react';
import './App.css';
import Table from './components/Table';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <main>
        <h1>Projeto Star Wars - Trybe</h1>
        <Table />
      </main>
    </PlanetsProvider>
  );
}

export default App;
