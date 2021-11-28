import React from 'react';
import Filter from './components/filter/Filter';
import Table from './components/table/Table';
import MyProvider from './context/MyProvider';

function App() {
  return (
    <MyProvider>
      <Filter />
      <Table />
    </MyProvider>
  );
}

export default App;
