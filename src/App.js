import React from 'react';
import PlannetsProvider from './context/PlannetsProvider';
import './App.css';
import Table from './components/Table';
import SearchBar from './components/SearchBar';
import NumericsFilters from './components/NumericsFilters';

function App() {
  return (
    <PlannetsProvider>
      <SearchBar />
      <NumericsFilters />
      <Table />
    </PlannetsProvider>
  );
}

export default App;
