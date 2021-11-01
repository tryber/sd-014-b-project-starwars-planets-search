import React from 'react';
import './App.css';
import Table from './Components/Table';
import TableProvider from './context/TableProvider';

function App() {
  return (
    <div>
      <TableProvider>
        <Table />
      </TableProvider>
    </div>
  );
}

export default App;
