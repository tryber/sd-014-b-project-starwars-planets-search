import React from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Table from './components/Table';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <Header />
      <Search />
      <Table />
    </Provider>
  );
}

export default App;
