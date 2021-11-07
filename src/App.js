import React from 'react';
import GlobalStorage from './context/GlobalStorage';
import Table from './components/Table';
import './App.css';

function App() {
  return (
    <div>
      <GlobalStorage>
        <Table />
      </GlobalStorage>
    </div>
  );
}
export default App;
