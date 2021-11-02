import React from 'react';
import Provider from './context/Provider';
import FilterName from './components/FilterName';
import FilterNumeric from './components/FilterNumeric';
import Table from './components/Table';
import './App.css';

function App() {
  return (
    <Provider>
      <FilterName />
      <FilterNumeric />
      <Table />
    </Provider>
  );
}

export default App;
