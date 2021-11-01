import React from 'react';
import PlanetsContextProvider from './contexts/PlanetsContext';
import Header from './components/Header';
import Table from './components/Table';
import './App.css';

function App() {
  return (
    <PlanetsContextProvider>
      <Header />
      <Table />
    </PlanetsContextProvider>
  );
}

export default App;
