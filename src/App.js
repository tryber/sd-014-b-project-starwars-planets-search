import React from 'react';
import Provider from './context/Provider';
import FiltererComponent from './components/FilterComponent';
import NameSearch from './components/NameSearch';
import PlanetsTable from './components/PlanetsTable';
import './App.css';

function App() {
  return (
    <Provider>
      <NameSearch />
      <FiltererComponent />
      <PlanetsTable />
    </Provider>
  );
}

export default App;
