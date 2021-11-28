import React from 'react';
import Provider from './context/Provider';
import NameSearch from './components/NameSearch';
import PlanetsTable from './components/PlanetsTable';
import './App.css';

function App() {
  return (
    <Provider>
      <NameSearch />
      <PlanetsTable />
    </Provider>
  );
}

export default App;
