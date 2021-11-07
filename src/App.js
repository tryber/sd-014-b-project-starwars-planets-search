import React from 'react';
import Provider from './context/Provider';
import FilterName from './components/FilterName';
import FilterNumeric from './components/FilterNumeric';
import OrderColumns from './components/OrderColumns';
import Table from './components/Table';
import './App.css';

function App() {
  return (
    <Provider>
      <FilterName />
      <FilterNumeric />
      <OrderColumns />
      <Table />
    </Provider>
  );
}

export default App;
