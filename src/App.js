import React from 'react';
import './App.css';
import Table from './components/Table';
import DataProvider from './context/DataProvider';
import Search from './components/Search';
import FilterNumber from './components/FilterNumber';

function App() {
  return (
    <DataProvider>
      <div>
        <span>Star wars - Planets</span>
        <Search />
        <FilterNumber />
        <Table />
      </div>
    </DataProvider>
  );
}

export default App;
