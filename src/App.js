import React from 'react';
import Provider from './context/Provider';
import FilterName from './component/FilterPlanetName';
import FilterNumeric from './component/FilterNumericValues';
import OrderColumns from './component/OrderColumns';
import Table from './component/Table';
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
