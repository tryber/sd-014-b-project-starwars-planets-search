import React from 'react';
import './styles/global.scss';
import Header from './components/Header';
import Table from './components/Table';
import { PlanetsProvider } from './hooks/usePlanets';

function App() {
  return (
    <PlanetsProvider>
      <Header />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
