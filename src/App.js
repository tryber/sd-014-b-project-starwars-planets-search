import React from 'react';
import Table from './components/Table';
import FilterInput from './components/FilterInput';
import './App.css';
import Provider from './provider/Provider';

function App() {
  return (
    <Provider>
      <div>
        <h1>Projeto Star Wars - Trybe</h1>
        <FilterInput />
        <Table />
      </div>
    </Provider>
  );
}

export default App;
