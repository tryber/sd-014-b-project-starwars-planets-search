import React from 'react';
import './App.css';
import FilterBar from './components/FilterBar';
import SearchBar from './components/SearchBar';
import Table from './components/Table';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <SearchBar />
      <FilterBar />
      <Table />
    </Provider>
  );
}

export default App;
