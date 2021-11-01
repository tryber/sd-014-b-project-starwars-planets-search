import React from 'react';
import './App.css';
import FilterInput from './Components/FilterInput';
import Table from './Components/Table';
import TableProvider from './context/TableProvider';

function App() {
  return (
    <div>
      <TableProvider>
        <FilterInput />
        <Table />
      </TableProvider>
    </div>
  );
}

export default App;
