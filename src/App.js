import React from 'react';
import './App.css';
import FilterForm from './Components/FilterForm';
import FilterInput from './Components/FilterInput';
import Table from './Components/Table';
import TableProvider from './context/TableProvider';

function App() {
  return (
    <div>
      <TableProvider>
        <FilterInput />
        <FilterForm />
        <Table />
      </TableProvider>
    </div>
  );
}

export default App;
