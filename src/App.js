import React from 'react';
import PlannetsProvider from './context/PlannetsProvider';
import './App.css';
import Table from './components/Table';

function App() {
  return (
    <PlannetsProvider>
      <Table />
    </PlannetsProvider>
  );
}

export default App;
