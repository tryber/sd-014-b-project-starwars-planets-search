import React from 'react';
import Provider from './context/Provider';
import './App.css';
import Table from './components/Table';
import Header from './components/SearchBar';

function App() {
  return (
    <Provider>
      <Header />
      <Table />
    </Provider>
  );
}

export default App;
