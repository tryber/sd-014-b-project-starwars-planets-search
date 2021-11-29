import React from 'react';
import NominalFilter from './components/nominalFilter/NominalFilter';
import NumericFilter from './components/numericFilter/NumericFilter';
import Table from './components/table/Table';
import MyProvider from './context/MyProvider';

function App() {
  return (
    <MyProvider>
      <NominalFilter />
      <NumericFilter />
      <Table />
    </MyProvider>
  );
}

export default App;
