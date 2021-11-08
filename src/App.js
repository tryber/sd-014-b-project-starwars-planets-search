import React from 'react';
import './App.css';
import SWProvider from './context/SWProvider';
import Table from './components/Table';

function App() {
  return (
    <SWProvider>
      <Table />
    </SWProvider>
  );
}

export default App;
