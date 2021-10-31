import React from 'react';
import './App.css';
import Header from './components/Header';
import TableOfPlanets from './components/TableOfPlanets';
import PlanetsProvider from './context/PlanetsProvider';
import fetchApi from './service/fetchApi';

function App() {
  fetchApi();
  return (
    <main>
      <PlanetsProvider>
        <Header />
        <TableOfPlanets />
      </PlanetsProvider>
    </main>
  );
}

export default App;
