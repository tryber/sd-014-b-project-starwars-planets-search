import React from 'react';
import FilterList from './components/filterList/FilterList';
import NominalFilter from './components/nominalFilter/NominalFilter';
import NumericFilter from './components/numericFilter/NumericFilter';
import Table from './components/table/Table';
import MyProvider from './context/MyProvider';

function App() {
  return (
    <MyProvider>
      <NominalFilter />
      <NumericFilter />
      <FilterList />
      <Table />
    </MyProvider>
  );
}

export default App;
