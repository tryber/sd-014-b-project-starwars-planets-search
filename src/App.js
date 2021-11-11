import React from 'react';
import './App.css';
import Filters from './components/Filters';
import Header from './components/Header';
import PlanetsTable from './components/PlanetsTable';
import PlanetsProvider from './context/PlanetsProvider';
import fetchApi from './service/fetchApi';

function App() {
  fetchApi();
  return (
    <main>
      <PlanetsProvider>
        <Filters />
        <Header />
        <PlanetsTable />
      </PlanetsProvider>
    </main>
  );
}

export default App;
