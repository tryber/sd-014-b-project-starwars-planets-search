import React from 'react';
import PlanetContextProvider from './context/PlanetContextProvider';
import Input from './components/Input';
import NumericFilter from './components/NumericFilter';
import OrderColumns from './components/OrderColums';
import Table from './components/Table';
import './App.css';

function App() {
  return (
    <main>
      <PlanetContextProvider>
        <Input />
        <NumericFilter />
        <OrderColumns />
        <Table />
      </PlanetContextProvider>
    </main>
  );
}

export default App;
