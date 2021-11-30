import React from 'react';
import './App.css';
import Input from './components/Input';
import FilterNumeric from './components/NumericFilter';
import Table from './components/Table';
import PlanetContextProvider from './context/PlanetContextProvider';

function App() {
  return (
    <main>
      <PlanetContextProvider>
        <Input />
        <FilterNumeric />
        <Table />
      </PlanetContextProvider>
    </main>
  );
}

export default App;
