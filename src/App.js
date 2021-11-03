import React from 'react';
import PlannetsProvider from './context/PlannetsProvider';
import './App.css';
import Table from './components/Table';

function App() {
  return (
    <span>
      Hello, App!
      <PlannetsProvider>
        <Table />
      </PlannetsProvider>
    </span>
  );
}

export default App;
