import React from 'react';
import Table from './components/Table';
import TableProvider from './context/TableProvider';
import './App.css';

function App() {
  return (
    <TableProvider>
      <Table />
    </TableProvider>
  );
}

export default App;
