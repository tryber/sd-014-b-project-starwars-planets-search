import React from 'react';
import './App.css';
import Table from './components/Table';
import Provider from './context/Provider';
import FilterNames from './components/NameFilter';

function App() {
  return (
    <Provider>
      <FilterNames />
      <Table />
    </Provider>
  );
}

export default App;
