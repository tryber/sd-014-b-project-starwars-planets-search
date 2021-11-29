import React from 'react';
import Filters from './components/filters/Filters';
import Table from './components/table/Table';
import MyProvider from './context/MyProvider';

function App() {
  return (
    <MyProvider>
      <Filters />
      <Table />
    </MyProvider>
  );
}

export default App;
