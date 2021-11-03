import React from 'react';
import './App.css';
import Table from './components/Table';
import Header from './components/Header';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <Header />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
