import React from 'react';
import './App.css';
import FilterNumeric from './components/FilterNumeric';
import Search from './components/Search';
import Table from './components/Table';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <Search />
      <FilterNumeric />
      <Table />
    </Provider>
  );
}

export default App;
