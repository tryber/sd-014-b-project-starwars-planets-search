import React from 'react';
import './App.css';
import InputText from './components/InputText';
import NumericFIlter from './components/NumericFIlter';
import Table from './components/Table';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <InputText />
      <NumericFIlter />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
