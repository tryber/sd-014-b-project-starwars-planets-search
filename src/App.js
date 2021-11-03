import React from 'react';
import './App.css';
import Search from './components/Search';
import Table from './components/Table';
import MyComponent from './context-api/Provider';

function App() {
  return (
    <MyComponent>
      <h1>Project Star Wars - Trybe </h1>
      <Search />
      <Table />
    </MyComponent>
  );
}

export default App;
