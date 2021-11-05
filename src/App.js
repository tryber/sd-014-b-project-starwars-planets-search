import React from 'react';
import './App.css';
import FilterByName from './components/FilterByName';
import FilterByNumericValues from './components/FilterByNumericValues';
import FiltersList from './components/FiltersList';
import Table from './components/Table';
import MyProvider from './context/MyProvider';

function App() {
  return (
    <MyProvider>
      <FilterByName />
      <FilterByNumericValues />
      <FiltersList />
      <Table />
    </MyProvider>
  );
}

export default App;
