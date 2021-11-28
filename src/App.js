import React from 'react';
import ColumnFilter from './components/ColumnFilter';
import Search from './components/Search';
import Table from './components/Table';
import Provider from './context/Provider';
import './App.css';

function App() {
  return (
    <Provider>
      <header>
        <h1>Star Wars Planets Search</h1>
        <Search />
        <ColumnFilter />
      </header>
      <Table />
    </Provider>
  );
}

export default App;
