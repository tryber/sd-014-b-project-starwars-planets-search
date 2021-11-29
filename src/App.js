import React from 'react';
import './App.css';
import Search from './components/Search';
import Table from './components/Table';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <Search />
      <Table />
    </Provider>
  );
}

export default App;
