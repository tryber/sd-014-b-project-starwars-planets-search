import React from 'react';
import Provider from './context/Provider';
import FilterName from './components/FilterName';
import Table from './components/Table';
import './App.css';

function App() {
  return (
    <Provider>
      <FilterName />
      <Table />
    </Provider>
  );
}

export default App;
