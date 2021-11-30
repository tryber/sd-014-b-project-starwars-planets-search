import React from 'react';
import Listfilters from './components/listFilters/Listfilters';
import NominalFilter from './components/nominalFilter/NominalFilter';
import NumericFilter from './components/numericFilter/NumericFilter';
import Table from './components/table/Table';
import MyProvider from './context/MyProvider';

function App() {
  return (
    <MyProvider>
      <NominalFilter />
      <NumericFilter />
      <Listfilters />
      <Table />
    </MyProvider>
  );
}

export default App;
