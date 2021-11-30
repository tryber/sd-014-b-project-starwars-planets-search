import React from 'react';
import './App.css';
import Table from './components/Table';
import Filter from './components/Filter';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <Filter />
      <Table />
    </Provider>
  );
}

export default App;
