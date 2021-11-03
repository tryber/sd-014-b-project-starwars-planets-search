import React from 'react';
import './App.css';
import Table from './componentes/Table';
import DataProvider from './context/DataProvider';

const App = () => (
  <DataProvider>
    <Table />
  </DataProvider>
);

export default App;
