import React from 'react';
import PlanetProvider from './context/PlanetProvider';
import Table from './components/table/Table';
import Input from './components/input/Input';
import './App.css';

function App() {
  return (
    <PlanetProvider>
      <Input />
      <Table />
    </PlanetProvider>
  );
}

export default App;
