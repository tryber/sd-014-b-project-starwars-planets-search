import React from 'react';
import './App.css';
import InputText from './components/InputText';
import Table from './components/Table';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <InputText />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
