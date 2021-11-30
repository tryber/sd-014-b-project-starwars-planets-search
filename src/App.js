import React from 'react';
import './App.css';
import Search from './components/Search';
import Table from './components/Table';
import Provider from './context/Provider';
import FilterByNumber from './components/FilterByNumber';

function App() {
  return (
    <Provider>
      <header>
        <Search />
        <FilterByNumber />
      </header>
      <Table />
    </Provider>
  );
}

export default App;
