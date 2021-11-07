import React from 'react';
import './App.css';
import Table from './components/Table';
import SWPlanetsProvider from './context/SWPlanetsProvider'

function App() {
  return (
    <SWPlanetsProvider>
      <Table />
    </SWPlanetsProvider>
  );
}

export default App;
