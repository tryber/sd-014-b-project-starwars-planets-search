import React from 'react';
import './App.css';
import Table from './components/Table';
import Provider from './context/Provider';

function App() {
  return (
    <>
      <h1>Projeto StarWars - Trybe</h1>
      <Provider>
        <Table />
      </Provider>
    </>
  );
}

export default App;
