import React from 'react';
import './App.css';
import Table from './Components/Table';
import DataProvider from './context/myContext';

function App() {
  return (
    <DataProvider>
      <Table />
    </DataProvider>
  );
}

export default App;
